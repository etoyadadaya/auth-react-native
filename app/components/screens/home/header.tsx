import React, {FC} from "react";
import {TouchableOpacity, View, Text} from "react-native";
import Avatar from "../../ui/avatar";
import {useNavigation} from "@react-navigation/native";
import {Entypo} from "@expo/vector-icons";

const Header: FC = () => {
	const {navigate} = useNavigation();

	return (
			<View className="flex-row items-center px-4">
				<Avatar name="Aboba"/>
				<TouchableOpacity
						className="flex-row items-end"
						onPress={() => navigate("Profile")}
				>
					<Text className="text-2xl text-gray-800 font-bold">Aboba</Text>
					<Entypo className="text-gray-800" name="chevron-small-right" size={28}/>
				</TouchableOpacity>
			</View>
	)
}

export default Header;
