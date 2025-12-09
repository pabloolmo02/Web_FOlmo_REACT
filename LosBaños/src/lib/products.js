import { collection, getDocs } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from './firebase';

// Función para obtener la URL de descarga de una imagen desde Firebase Storage
async function getImageUrl(imagePath) {
    try {
        const storageRef = ref(storage, imagePath);
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        // Si la imagen no existe en Storage, devuelve una URL de imagen por defecto
        console.warn(`Advertencia: La imagen en la ruta '${imagePath}' no se encontró. Usando imagen por defecto.`);
        return 'https://via.placeholder.com/300x300.png?text=Imagen+no+disponible';
    }
}

// Obtiene todos los productos de Firestore y enriquece cada uno con las URLs de sus imágenes
export async function getProducts() {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const products = [];

    for (const doc of querySnapshot.docs) {
        const productData = doc.data();
        
        // Obtiene la URL pública para la imagen principal
        const imageUrl = await getImageUrl(productData.imageSrc);

        products.push({
            ...productData,
            id: doc.id,
            imageSrc: imageUrl, // Reemplazamos la ruta por la URL de descarga final
        });
    }

    return products;
}

// Obtiene un único producto y enriquece todas sus imágenes con URLs de descarga
export async function getProduct(productId) {
    const productRef = doc(db, 'products', productId);
    const productSnap = await getDoc(productRef);

    if (!productSnap.exists()) {
        console.error(`No se encontró el producto con ID: ${productId}`);
        return null;
    }

    const productData = productSnap.data();

    // Obtiene la URL para la imagen principal
    const mainImageUrl = await getImageUrl(productData.imageSrc);

    // Obtiene las URLs para todas las imágenes de la galería en paralelo
    const galleryImageUrls = await Promise.all(
        productData.images.map(image => getImageUrl(image.src))
    );

    // Reemplaza las rutas de la galería por las URLs de descarga finales
    const finalImages = productData.images.map((image, index) => ({
        ...image,
        src: galleryImageUrls[index]
    }));

    return {
        ...productData,
        id: productSnap.id,
        imageSrc: mainImageUrl,
        images: finalImages
    };
}
