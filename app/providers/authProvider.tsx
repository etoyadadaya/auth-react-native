import React, {createContext, FC, ReactNode, useEffect, useMemo, useState} from "react";
import {User, onAuthStateChanged} from "firebase/auth";
import {addDoc, collection} from "firebase/firestore";
import {Alert} from "react-native";
import {db, login, logout, register, auth} from "../firebase";

interface IContext {
	user: User | null;
	isLoading: boolean;
	register: (email: string, password: string) => Promise<void>;
	login: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
}

interface IAuth {
	children: ReactNode;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC<IAuth> = ({children}) => {
	const [user, setUser] = useState<	User | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isLoadingInitial, setIsLoadingInitial] = useState(true);

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			setUser(user || null);
			setIsLoadingInitial(false);
		})
	}, []);

	const registerHandler = async (email: string, password: string) => {
		setIsLoading(true);
		try {
			const {user} = await register(email, password);

			await addDoc(collection(db, "users"), {
				uid: user.uid,
				name: email,
				email: email,
			});
		} catch (error: any) {
			Alert.alert("Ошибка: ошибка регистрации:", error);
		} finally {
			setIsLoading(false);
		}
	}

	const loginHandler = async (email: string, password: string) => {
		setIsLoading(true);
		try {
			await login(email, password);
		} catch (error: any) {
			Alert.alert("Ошибка: ошибка входа:", error);
		} finally {
			setIsLoading(false);
		}
	}

	const logoutHandler = async () => {
		setIsLoading(true);
		try {
			await logout();
		} catch (error: any) {
			Alert.alert("Ошибка: ошибка выхода:", error);
		} finally {
			setIsLoading(false);
		}
	}

	const value = useMemo(() => ({
		user, isLoading, login: loginHandler, logout: logoutHandler, register: registerHandler
		}), [user, isLoading]);

	return <AuthContext.Provider value={value}>{!isLoadingInitial && children}</AuthContext.Provider>;
}
