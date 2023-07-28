import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Importamos estas 2 funciones: La 1ra inicializeApp = la utilizo para iniciar la conexión con firebase.
// getFirestore = se utiliza para obtener una instancia de Firestore.

// Estamos trabajando con un objeto con toda nuestra información de la cuenta. Acá incluyo la Key personal con acceso a esta base de datos.
//apiKey: "AIzaSyDLNd9H97m0izOxGWiaswZgYdOCbw7Atb4",

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "phoenix-react.firebaseapp.com",
  projectId: "phoenix-react",
  storageBucket: "phoenix-react.appspot.com",
  messagingSenderId: "128400191728",
  appId: "1:128400191728:web:ce1b5c2986938f2940d235"
};

// Initialize Firebase y se para la config. como argumento. Esto devuelve una instancia de Firebase.
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Al exportar esta referencia, la tendremos disponible para importarla en toda nuestra aplicación.