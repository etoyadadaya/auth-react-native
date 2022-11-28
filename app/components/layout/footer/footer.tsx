import React, {FC} from "react";
import {StyleSheet, View} from "react-native";
import {menu} from "./menu";
import NavItem from "./navItem";
import {TypeRootStackParamList} from "../../../navigation/types";

interface IFooter {
	navigate: (screenName: keyof TypeRootStackParamList) => void;
	currentRoute: string;
}

const Footer: FC<IFooter> = ({navigate, currentRoute}) => {
	return (
			<View style={styles.view} className="px-4 flex-row justify-between items-center w-full bg-gray-50 px-0 pb-10 pt-2">
				{menu.map(item => (
						<NavItem
								key={item.title}
								item={item}
								navigate={navigate}
								currentRoute={currentRoute}
						/>
				))}
			</View>
	)
}

export default Footer;

const styles = StyleSheet.create({
	view: {
		borderTopColor: "#E1E1E1",
		borderTopWidth: 1
	}
});
