import React, {FC, useState} from "react";
import {View, Text, Pressable} from "react-native";
import {useAuth} from "../../../hooks/useAuth";
import Loader from "../../ui/loader";
import Field from "../../ui/field";
import Button from "../../ui/button";

interface IData {
	email: string;
	password: string;
}

const Auth: FC = () => {
	const [isReg, setIsReg] = useState(false);
	const [data, setData] = useState<IData>({} as IData);

	const {isLoading, login, register} = useAuth();
	const authHandler = async () => {
		const {email, password} = data;

		if (isReg) {
			await register(email, password);
		} else {
			await login(email, password);
		}

		setData({} as IData);
	}

	return (
			<View className="h-full w-full bg-white pt-16">
				<View className="mx-5 justify-center items-center h-full">
					<View className="w-9/12">
						<Text className="text-center text-gray-800 text-2xl font-bold mb-2">
							{isReg ? "Sign Up" : "Sign In"}
						</Text>
						{isLoading ? <Loader /> : <>
							<Field
									onChange={val => setData({...data, email: val})}
									placeholder={"Enter Email"}
									val={data.email}
							/>
							<Field
									onChange={val => setData({...data, password: val})}
									placeholder={"Enter Password"}
									val={data.password}
									isSecure={true}
							/>
							<Button onPress={authHandler} title={"Login"}/>
							<Pressable onPress={() => setIsReg(!isReg)}>
								<Text className="text-gray-800 opacity-30 text-right text-sm">
									{isReg ? "Login" : "Register"}
								</Text>
							</Pressable>
						</>}
					</View>
				</View>
			</View>
	);
};

export default Auth;
