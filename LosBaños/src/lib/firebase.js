import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // Importar getStorage

// Tus credenciales de Firebase que ya configuramos
const firebaseConfig = {
    apiKey: "<SECRET>",
    authDomain: "<SECRET>",
    projectId: "<SECRET>",
    storageBucket: "<SECRET>",
    messagingSenderId: "<SECRET>",
    appId: "<SECRET>"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar los servicios que usaremos
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // Exportar el servicio de Storage
