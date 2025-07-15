// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyBzdrAtJoBUONdyHsEPrzWDTH9FMg1xW78",
  authDomain: "supernova-372bf.firebaseapp.com",
  projectId: "supernova-372bf",
  storageBucket: "supernova-372bf.appspot.com",
  messagingSenderId: "917055386010",
  appId: "1:917055386010:web:3f27d9173e3dd7fbdf8a23"
};

// Inicialização segura
if (typeof firebase !== 'undefined') {
  try {
    if (!firebase.apps.length) {
      const app = firebase.initializeApp(firebaseConfig);
      console.log("Firebase inicializado:", app.name);
    }
    
    // Configuração para desenvolvimento (remova em produção)
    if (window.location.hostname === "localhost") {
      firebase.auth().useEmulator("http://localhost:9099");
      firebase.firestore().useEmulator("localhost", 8080);
      console.log("Usando emuladores locais");
    }
    
    window.db = firebase.firestore();
    window.auth = firebase.auth();
    
  } catch (error) {
    console.error("Erro de inicialização:", error);
  }
}