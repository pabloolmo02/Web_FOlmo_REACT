
import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProduct, getProductQuantities } from '@/api/EcommerceApi';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/components/ui/use-toast';
import { ShoppingCart, Loader2, ArrowLeft, CheckCircle, Minus, Plus, XCircle, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';

const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTFmMmY1Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2E1YjRjYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPjwv dGV4dD4KPC9zdmc+Cg==";

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = useCallback(async () => {
    if (product && selectedVariant) {
      if (!product.purchasable) {
        toast({
          variant: "destructive",
          title: "Producto no disponible",
          description: "Este producto no está disponible para la compra en este momento.",
        });
        return;
      }
      
      const availableQuantity = selectedVariant.inventory_quantity;
      try {
        await addToCart(product, selectedVariant, quantity, availableQuantity);
        toast({
          title: "¡Añadido al carrito! 🛒",
          description: `${quantity} x ${product.title} (${selectedVariant.title}) añadido.`,
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "¡Oh no! Algo salió mal.",
          description: error.message,
        });
      }
    }
  }, [product, selectedVariant, quantity, addToCart, toast]);

  const handleQuantityChange = useCallback((amount) => {
    setQuantity(prevQuantity => {
        const newQuantity = prevQuantity + amount;
        if (newQuantity < 1) return 1;

        if (selectedVariant?.manage_inventory && newQuantity > selectedVariant.inventory_quantity) {
          toast({
            variant: "destructive",
            title: "Stock máximo alcanzado",
            description: `Solo hay ${selectedVariant.inventory_quantity} unidades disponibles.`,
          });
          return selectedVariant.inventory_quantity;
        }

        return newQuantity;
    });
  }, [selectedVariant, toast]);
  
  const handlePrevImage = useCallback(() => {
    setCurrentImageIndex(prev => prev === 0 ? (product?.images?.length || 1) - 1 : prev - 1);
  }, [product?.images?.length]);

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex(prev => prev === (product?.images?.length || 1) - 1 ? 0 : prev + 1);
  }, [product?.images?.length]);

  const handleVariantSelect = useCallback((variant) => {
    setSelectedVariant(variant);
    const imageIndex = product.images.findIndex(img => img.url === variant.image_url);
    if (imageIndex !== -1) {
      setCurrentImageIndex(imageIndex);
    }
    setQuantity(1);
  }, [product?.images]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedProduct = await getProduct(id);

        const quantitiesResponse = await getProductQuantities({
          fields: 'inventory_quantity',
          product_ids: [fetchedProduct.id]
        });

        const variantQuantityMap = new Map();
        quantitiesResponse.variants.forEach(variant => {
          variantQuantityMap.set(variant.id, variant.inventory_quantity);
        });

        const productWithQuantities = {
          ...fetchedProduct,
          variants: fetchedProduct.variants.map(variant => ({
            ...variant,
            inventory_quantity: variantQuantityMap.get(variant.id) ?? variant.inventory_quantity
          }))
        };
        
        setProduct(productWithQuantities);
        if (productWithQuantities.variants && productWithQuantities.variants.length > 0) {
          setSelectedVariant(productWithQuantities.variants[0]);
        }
      } catch (err) {
        setError(err.message || 'Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <Loader2 className="h-16 w-16 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-10">
        <Link to="/productos" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mb-6">
          <ArrowLeft size={16} />
          Volver a la tienda
        </Link>
        <div className="text-center text-red-600 p-8 bg-red-50 rounded-2xl">
          <XCircle className="mx-auto h-16 w-16 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Error al cargar el producto</h2>
          <p className="mb-6">{error}</p>
        </div>
      </div>
    );
  }

  const price = selectedVariant?.sale_price_formatted ?? selectedVariant?.price_formatted;
  const originalPrice = selectedVariant?.sale_price_formatted ? selectedVariant?.price_formatted : null;
  const availableStock = selectedVariant ? selectedVariant.inventory_quantity : 0;
  const isStockManaged = selectedVariant?.manage_inventory ?? false;
  const isOutOfStock = isStockManaged && availableStock < 1;
  const canAddToCart = product.purchasable && !isOutOfStock;

  const currentImageUrl = product.images?.[currentImageIndex]?.url || product.image || placeholderImage;
  const hasMultipleImages = product.images && product.images.length > 1;

  return (
    <>
      <Helmet>
        <title>{product.title} - Tienda Quimxel</title>
        <meta name="description" content={product.description?.substring(0, 160) || product.title} />
      </Helmet>
      <div className="container mx-auto px-4 py-10">
        <Link to="/productos" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mb-6 font-semibold">
          <ArrowLeft size={16} />
          Volver a la tienda
        </Link>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 bg-white p-8 rounded-2xl shadow-xl">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg h-96 md:h-[500px]">
              <img
                src={currentImageUrl}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              {hasMultipleImages && (
                <>
                  <button onClick={handlePrevImage} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all" aria-label="Previous image">
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={handleNextImage} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all" aria-label="Next image">
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
            {hasMultipleImages && (
              <div className="grid grid-cols-5 gap-2">
                {product.images.map((image, index) => (
                  <button key={image.url + index} onClick={() => setCurrentImageIndex(index)} className={`rounded-md overflow-hidden border-2 transition-all ${index === currentImageIndex ? 'border-blue-600' : 'border-transparent hover:border-blue-300'}`}>
                    <img src={image.url} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover"/>
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.title}</h1>
            {product.subtitle && <p className="text-lg text-gray-600 mb-4">{product.subtitle}</p>}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-bold text-blue-600">{price}</span>
              {originalPrice && <span className="text-2xl text-gray-400 line-through">{originalPrice}</span>}
            </div>

            {product.variants.length > 1 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-800 mb-2">{product.options[0]?.title || 'Estilo'}</h3>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map(variant => (
                    <Button
                      key={variant.id}
                      variant={selectedVariant?.id === variant.id ? 'default' : 'outline'}
                      onClick={() => handleVariantSelect(variant)}
                      className={`transition-all ${selectedVariant?.id === variant.id ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300 text-gray-800 hover:bg-gray-100'}`}
                    >
                      {variant.title}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div className="prose max-w-none text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: product.description }} />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-full p-1">
                <Button onClick={() => handleQuantityChange(-1)} variant="ghost" size="icon" className="rounded-full h-8 w-8 text-gray-800 hover:bg-gray-100"><Minus size={16} /></Button>
                <span className="w-10 text-center text-gray-900 font-bold">{quantity}</span>
                <Button onClick={() => handleQuantityChange(1)} variant="ghost" size="icon" className="rounded-full h-8 w-8 text-gray-800 hover:bg-gray-100"><Plus size={16} /></Button>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t">
              <Button onClick={handleAddToCart} size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg disabled:bg-gray-400 disabled:cursor-not-allowed" disabled={!canAddToCart}>
                <ShoppingCart className="mr-2 h-5 w-5" /> {isOutOfStock ? "Sin Stock" : "Añadir al Carrito"}
              </Button>

              {isStockManaged && canAddToCart && !isOutOfStock && (
                <p className="text-sm text-green-600 mt-3 flex items-center justify-center gap-2">
                  <CheckCircle size={16} /> {availableStock} en stock
                </p>
              )}
               {!product.purchasable && (
                  <p className="text-sm text-red-600 mt-3 flex items-center justify-center gap-2">
                    <XCircle size={16} /> No disponible actualmente
                  </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailPage;
