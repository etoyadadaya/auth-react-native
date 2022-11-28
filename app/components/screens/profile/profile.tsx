import React, {FC} from "react";
import {View, Text} from "react-native";
import Button from "../../ui/button";
import Layout from "../../layout/layout";
import {useProfile} from "../../../hooks/useProfile";
import Loader from "../../ui/loader";
import Field from "../../ui/field";
import {useAuth} from "../../../hooks/useAuth";
import {useUpdateProfile} from "../../../hooks/useUpdateProfile";

const Profile: FC = () => {
	const {logout} = useAuth();
	const { isLoading: isProfileLoading, name, setName, profile } = useProfile();
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
						<Field onChange={setName} val={name} placeholder="Введите имя"/>
						<Button onPress={updateProfile} title="Обновить профиль"/>
						<Button onPress={logout} title="Выйти"/>
					</>}
				</View>
			</Layout>

	);
};

export default Profile;
