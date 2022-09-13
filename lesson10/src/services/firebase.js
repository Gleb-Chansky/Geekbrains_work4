import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDcMp_N2sycq7y_DOdzQV-LM7ynARzytz8",
	authDomain: "geek-brains-lesson9.firebaseapp.com",
	projectId: "geek-brains-lesson9",
	storageBucket: "geek-brains-lesson9.appspot.com",
	messagingSenderId: "488011579026",
	appId: "1:488011579026:web:81fb484bb8a69c475bb04b"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref()
export const auth = firebase.auth();