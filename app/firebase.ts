import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA4F0mi4UuR6ck6mHtIvxaR6NxX3BgBUJc",
	authDomain: "auth-react-native-e5818.firebaseapp.com",
	projectId: "auth-react-native-e5818",
	storageBucket: "auth-react-native-e5818.appspot.com",
	messagingSenderId: "165782322096",
	appId: "1:165782322096:web:cb85abba73de1b16473475",
	measurementId: "G-J6J8X1FC6V"
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();

export const register = (email: string, password: string) => {
	return createUserWithEmailAndPassword(auth, email, password);
}

export const login = (email: string, password: string) => {
	return signInWithEmailAndPassword(auth, email, password);
}

export const logout = () => signOut(auth);
