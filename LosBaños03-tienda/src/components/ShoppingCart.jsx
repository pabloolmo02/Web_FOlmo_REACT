
import React, { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart as ShoppingCartIcon, X, Plus, Minus, Loader2 } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { initializeCheckout } from '@/api/EcommerceApi';
import { useToast } from '@/components/ui/use-toast';

const ShoppingCart = ({ isCartOpen, setIsCartOpen }) => {
  const { toast } = useToast();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = React.useState(false);

  const totalItems = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems]);

  const handleCheckout = useCallback(async () => {
    if (cartItems.length === 0) {
      toast({
        title: 'Tu carrito está vacío',
        description: 'Añade productos antes de proceder al pago.',
        variant: 'destructive',
      });
      return;
    }
    
    setIsCheckingOut(true);

    try {
      const items = cartItems.map(item => ({
        variant_id: item.variant.id,
        quantity: item.quantity,
      }));

      const successUrl = `${window.location.origin}/success`;
      const cancelUrl = window.location.href;

      const { url } = await initializeCheckout({ items, successUrl, cancelUrl });
      
      clearCart();
      window.location.href = url;
    } catch (error) {
      toast({
        title: 'Error en el pago',
        description: 'Hubo un problema al iniciar el pago. Por favor, inténtalo de nuevo.',
        variant: 'destructive',
      });
      setIsCheckingOut(false);
    }
  }, [cartItems, clearCart, toast]);

  const handleUpdateQuantity = (variantId, newQuantity) => {
    const item = cartItems.find(item => item.variant.id === variantId);
    if (item && item.variant.manage_inventory && newQuantity > item.variant.inventory_quantity) {
      toast({
        title: "Stock insuficiente",
        description: `Solo quedan ${item.variant.inventory_quantity} unidades de ${item.product.title}.`,
        variant: "destructive",
      });
      return;
    }
    updateQuantity(variantId, newQuantity);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 z-[100]"
          onClick={() => setIsCartOpen(false)}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Carrito de Compras</h2>
              <Button onClick={() => setIsCartOpen(false)} variant="ghost" size="icon" className="text-gray-700 hover:bg-gray-100">
                <X />
              </Button>
            </div>
            <div className="flex-grow p-6 overflow-y-auto space-y-4 bg-gray-50">
              {cartItems.length === 0 ? (
                <div className="text-center text-gray-500 h-full flex flex-col items-center justify-center">
                  <ShoppingCartIcon size={48} className="mb-4 text-gray-400" />
                  <p>Tu carrito está vacío.</p>
                </div>
              ) : (
                cartItems.map(item => (
                  <div key={item.variant.id} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                    <img src={item.product.image || 'https://via.placeholder.com/80'} alt={item.product.title} className="w-20 h-20 object-cover rounded-md border" />
                    <div className="flex-grow">
                      <h3 className="font-semibold text-gray-800">{item.product.title}</h3>
                      {item.variant.title && <p className="text-sm text-gray-500">{item.variant.title}</p>}
                      <p className="text-sm text-blue-600 font-bold mt-1">
                        {item.variant.sale_price_formatted || item.variant.price_formatted}
                      </p>
                       <div className="flex items-center border border-gray-200 rounded-md mt-2 w-fit">
                        <Button onClick={() => handleUpdateQuantity(item.variant.id, item.quantity - 1)} size="sm" variant="ghost" className="px-2 h-8 text-gray-700 hover:bg-gray-100">-</Button>
                        <span className="px-3 text-gray-800 text-sm font-medium">{item.quantity}</span>
                        <Button onClick={() => handleUpdateQuantity(item.variant.id, item.quantity + 1)} size="sm" variant="ghost" className="px-2 h-8 text-gray-700 hover:bg-gray-100">+</Button>
                      </div>
                    </div>
                    <Button onClick={() => removeFromCart(item.variant.id)} size="icon" variant="ghost" className="text-red-500 hover:bg-red-50 h-8 w-8 flex-shrink-0">
                      <X className="w-4 h-4"/>
                    </Button>
                  </div>
                ))
              )}
            </div>
            {cartItems.length > 0 && (
              <div className="p-6 border-t bg-white">
                <div className="flex justify-between items-center mb-4 text-gray-900">
                  <span className="text-lg font-medium">Total</span>
                  <span className="text-2xl font-bold">{getCartTotal()}</span>
                </div>
                <Button onClick={handleCheckout} disabled={isCheckingOut} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-base">
                  {isCheckingOut ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : 'Proceder al Pago'}
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShoppingCart;
