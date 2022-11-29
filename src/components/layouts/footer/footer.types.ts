import {AntDesign} from "@expo/vector-icons";

import {TypeRootStackParamList} from "@types";

export interface IFooterItem {
	iconName: keyof typeof AntDesign.glyphMap,
	title: keyof TypeRootStackParamList
}

export interface IFooter {
	navigate: (screenName: keyof TypeRootStackParamList) => void;
	currentRoute: string;
}

export interface INavItem {
	item: IFooterItem;
	navigate: (screenName: keyof TypeRootStackParamList) => void;
	currentRoute: string;
}

