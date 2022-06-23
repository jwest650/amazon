import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAO-WA29kIoKUvE3lGjShXNV2ntTj5CnKY",

    authDomain: "clone-ea14a.firebaseapp.com",

    projectId: "clone-ea14a",

    storageBucket: "clone-ea14a.appspot.com",

    messagingSenderId: "670498475758",

    appId: "1:670498475758:web:a8439b602461e777e46dff",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;
