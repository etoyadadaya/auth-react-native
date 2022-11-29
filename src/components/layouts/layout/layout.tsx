import React, {FC} from "react";
import {View, ScrollView} from "react-native";
import {ILayout} from "./layout.types";

export const Layout:FC<ILayout> = ({children, isScrollView= true}) => {
	return (
		<View className="h-full w-full bg-white pt-16">
			{isScrollView ? <ScrollView>{children}</ScrollView> : children}
		</View>
	);
};
