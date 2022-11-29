import React, {FC} from "react";
import {View, Text} from "react-native";
import {useAuth, useProfile, useUpdateProfile} from "@hooks/index";
import {Layout} from "@layouts/index";
import {Button, Input, Loader} from "@ui/index";

export const Profile: FC = () => {
	const {logout} = useAuth();
	const {isLoading: isProfileLoading, name, setName, profile} = useProfile();
	const {isLoading, isSuccess, updateProfile} = useUpdateProfile(name, profile.docId);

	return (
			<Layout>
				<View className="px-4">
					<Text className="text-2xl text-gray-800 font-bold text-center">Profile</Text>
				</View>
				<View className="px-4">
					{isSuccess && (
							<View className="bg-green-500 p-3 py-2 rounded-lg">
								<Text className="text-white text-center">
									Профиль обновлен успешно!
								</Text>
							</View>
					)}
					{(isProfileLoading || isLoading) ? <Loader/> : <>
						<Input onChange={setName} val={name} placeholder="Введите имя"/>
						<Button onPress={updateProfile} title="Обновить профиль"/>
						<Button onPress={logout} title="Выйти"/>
					</>}
				</View>
			</Layout>
	);
};
