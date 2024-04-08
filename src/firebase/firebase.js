import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  doc,
  query,
  setDoc,
  addDoc,
  getDocs,
  deleteDoc,
  collection,
  getFirestore,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMIwuM1r0V1Gdz61x888KNUMRViAqjxuE",
  authDomain: "to-do-app-57402.firebaseapp.com",
  projectId: "to-do-app-57402",
  storageBucket: "to-do-app-57402.appspot.com",
  messagingSenderId: "436700737115",
  appId: "1:436700737115:web:ffc3326f3350ff91ec597e",
};

// Initialize Firebase Authentication and get a reference to the service

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const toDosCollection = collection(firestore, "todos");

// Authentication
const auth = getAuth(firebaseApp);

export async function login({ email, password }) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    console.log(error);
  }
}

export async function createUser({ email, password }) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    console.log(error);
  }
}

export async function addNewDocument(data) {
  const newDoc = await addDoc(toDosCollection, data);
  return newDoc;
}

export async function removeDocument(id) {
  const documentData = doc(toDosCollection, id);
  const deletedDoc = await deleteDoc(documentData);
  return deletedDoc;
}

export async function updateDocument(data) {
  const documentData = doc(toDosCollection, data.id);
  const updatedDocument = await setDoc(documentData, data, {
    merge: true,
  });
  return updatedDocument;
}

export async function fetchData() {
  const documentsQuery = query(toDosCollection);
  const querySnapshot = await getDocs(documentsQuery);
  const allDocs = querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return allDocs;
}
