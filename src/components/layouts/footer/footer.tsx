import React, {FC} from "react";
import {StyleSheet, View} from "react-native";
import {menu} from "./menu";
import {IFooter} from "./footer.types";
import {NavItem} from "./navItem";

export const Footer: FC<IFooter> = ({navigate, currentRoute}) => {
	return (
			<View style={styles.view} className="px-4 flex-row justify-between items-center w-full bg-gray-50 px-0 pb-2 pt-2">
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

const styles = StyleSheet.create({
	view: {
		borderTopColor: "#E1E1E1",
		borderTopWidth: 1
	}
});
