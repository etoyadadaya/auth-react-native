import React, {FC} from "react";
import {TouchableHighlight} from "react-native";
import {Text} from "react-native";

interface IButton {
	onPress: () => void;
	title: string;
}

const Button:FC<IButton> = ({onPress, title}) => {
	return (
		<TouchableHighlight
				onPress={onPress}
				underlayColor="#FBBF5D"
				className="text-gray-800 rounded-xl w-full my-4 py-3 bg-amber-300"
		>
			<Text className="text-center">{title}</Text>
		</TouchableHighlight>
	);
};

export default Button;
