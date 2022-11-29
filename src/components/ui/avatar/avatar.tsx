import React, {FC} from "react";
import {View, Text} from "react-native";
import {IAvatar} from "./avatar.types";

export const Avatar: FC<IAvatar> = ({name}) => {
	return (
			<View className="rounded-full bg-gray-300 w-9 h-9 mr-3 items-center justify-center">
				<Text className="text-white text-lg font-medium">{name?.slice(0,1)}</Text>
			</View>
	)
}
