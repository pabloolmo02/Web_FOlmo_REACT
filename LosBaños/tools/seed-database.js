import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// --- INSTRUCCIONES ---
// 1. Descarga tu clave de servicio de Firebase si aún no lo has hecho.
//    (Consola de Firebase -> Configuración del proyecto -> Cuentas de servicio -> Generar nueva clave privada).
// 2. Asegúrate de que el archivo se llama `serviceAccountKey.json` y está en la carpeta `LosBaños/tools`.
// 3. Añade todos tus productos al archivo `LosBaños/data/products.js`.
// 4. Ejecuta este script desde la raíz de tu proyecto (`LosBaños`) con el comando:
//    node tools/seed-database.js
// ---------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serviceAccountPath = path.resolve(__dirname, 'serviceAccountKey.json');
const productsDataPath = path.resolve(__dirname, '../data/products.js');

if (!fs.existsSync(serviceAccountPath)) {
    console.error(`Error: El archivo de clave de servicio no se encuentra en la ruta: ${serviceAccountPath}`);
    console.error('Por favor, sigue las instrucciones para descargarlo.');
    process.exit(1);
}

// Leer el JSON de forma compatible con ES Modules
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf-8'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'losbanos-97c6a.appspot.com'
});

const db = admin.firestore();
const productsCollection = db.collection('products');

async function importProducts() {
    try {
        // Usamos una ruta de archivo correcta para la importación dinámica
        const { products } = await import(productsDataPath);
        return products;
    } catch (error) {
        console.error(`Error al importar los productos desde ${productsDataPath}:`, error);
        process.exit(1);
    }
}

async function seedDatabase(products) {
    if (!products || products.length === 0) {
        console.log('No hay productos en data/products.js para procesar.');
        return;
    }

    console.log(`Comenzando a procesar ${products.length} productos...`);

    const BATCH_SIZE = 499; // Límite de Firestore es 500 operaciones por batch
    const batches = [];
    for (let i = 0; i < products.length; i += BATCH_SIZE) {
        batches.push(products.slice(i, i + BATCH_SIZE));
    }

    for (const [index, batchProducts] of batches.entries()) {
        const batch = db.batch();
        console.log(`Procesando lote ${index + 1}/${batches.length} (${batchProducts.length} productos)...`);

        batchProducts.forEach((product) => {
            if (!product.id) {
                console.warn(`ADVERTENCIA: Producto omitido porque no tiene ID: ${JSON.stringify(product)}`);
                return;
            }
            const priceAsNumber = parseFloat(product.price);
            if (isNaN(priceAsNumber)) {
                console.warn(`ADVERTENCIA: Producto "${product.name}" (ID: ${product.id}) omitido por precio inválido.`);
                return;
            }

            // Generar rutas para las imágenes en Firebase Storage
            const imageExtension = '.jpg';
            const mainImageRef = `products/${product.id}${imageExtension}`;
            const galleryImages = [
                { src: `products/${product.id}_1${imageExtension}`, alt: `Vista 1 de ${product.name || 'producto'}` },
                { src: `products/${product.id}_2${imageExtension}`, alt: `Vista 2 de ${product.name || 'producto'}` },
                { src: `products/${product.id}_3${imageExtension}`, alt: `Vista 3 de ${product.name || 'producto'}` },
                { src: `products/${product.id}_4${imageExtension}`, alt: `Vista 4 de ${product.name || 'producto'}` }
            ];

            const productData = {
                ...product,
                price: priceAsNumber,
                imageSrc: mainImageRef,
                images: galleryImages,
                imageAlt: product.imageAlt || `Imagen de ${product.name || 'producto'}`
            };

            const docRef = productsCollection.doc(product.id.toString());
            batch.set(docRef, productData);
        });

        try {
            await batch.commit();
        } catch (error) {
            console.error(`Error al subir el lote ${index + 1} de productos a Firestore:`, error);
        }
    }

    console.log("¡Éxito! Todos los lotes de productos han sido procesados.");
    console.log("Las rutas de las imágenes se han generado automáticamente en Firestore.");
    console.log("Revisa la consola por si ha habido advertencias sobre productos omitidos.");
}

async function run() {
    try {
        const products = await importProducts();
        await seedDatabase(products);
    } catch (error) {
        console.error('Error al ejecutar el script de subida:', error);
    }
}

run();