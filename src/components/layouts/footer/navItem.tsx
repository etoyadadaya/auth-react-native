import React, {FC} from "react";
import {Pressable, StyleSheet, Text} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {INavItem} from "./footer.types";

export const NavItem: FC<INavItem> = ({item, navigate, currentRoute}) => {
	const isActive = currentRoute === item.title;

	return (
			<Pressable className="items-center" style={styles.view} onPress={() => navigate(item.title)}>
				{!isActive ? <>
							<AntDesign className="text-xl text-gray-500" name={item.iconName}/>
							<Text className="text-xs text-gray-500" style={styles.text}>
								{item.title}
							</Text>
						</>
						:
						<>
							<AntDesign className="text-xl text-blue-500" name={item.iconName}/>
							<Text className="text-xs text-blue-500" style={styles.text}>
								{item.title}
							</Text>
						</>}
			</Pressable>
	)
}

const styles = StyleSheet.create({
	view: {
		width: "20%",
	},
	text: {
		marginTop: 1
	}
});
