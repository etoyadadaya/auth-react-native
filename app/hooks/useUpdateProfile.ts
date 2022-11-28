import React, {useState} from "react";
import {useAuth} from "./useAuth";
import {Alert} from "react-native";
import {updateDoc, doc} from "firebase/firestore";
import {db} from "../firebase";

export const useUpdateProfile = (changeName: string, docId: string) => {
	const {user} = useAuth();

	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const updateProfile = async () => {
		setIsLoading(true);
		if (!user) return;

		try {
			const docRef = doc(db, "users", docId);

			await updateDoc(docRef, {
				name: changeName
			});

			setIsSuccess(true);

			setTimeout(() => {
				setIsLoading(false)
			}, 3000);
		} catch (error: any) {
			Alert.alert("Profile update error", error.message);
		} finally {
			setIsLoading(false);
		}
	}

	return {isLoading, updateProfile, isSuccess};
}
