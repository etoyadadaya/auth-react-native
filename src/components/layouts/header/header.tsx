import React, {FC} from "react";
import {TouchableOpacity, View, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Entypo} from "@expo/vector-icons";
import {useProfile} from "@hooks/index";
import {Avatar, Loader} from "@ui/index";

export const Header: FC = () => {
	const {isLoading, name} = useProfile();
	const {navigate} = useNavigation();

	return isLoading ? <Loader/> : (
			<View className="flex-row items-center px-4">
				<Avatar name={name}/>
				<TouchableOpacity
						className="flex-row items-end"
						// @ts-ignore
						onPress={() => navigate("Profile")}
				>
					<Text className="text-2xl text-gray-800 font-bold">{name}</Text>
					<Entypo className="text-gray-800" name="chevron-small-right" size={28}/>
				</TouchableOpacity>
			</View>
	)
}
