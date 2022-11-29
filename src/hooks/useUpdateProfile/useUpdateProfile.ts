import {useState} from "react";
import {Alert} from "react-native";
import {updateDoc, doc} from "firebase/firestore";
import {useAuth} from "@hooks/index";
import {db} from "@services/index";

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
			Alert.alert("Ошибка обновления профиля", error.message);
		} finally {
			setIsLoading(false);
		}
	}

	return {isLoading, updateProfile, isSuccess};
}
