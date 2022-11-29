import {TypeRootStackParamList} from "./src/navigation/navigation.types";

declare global {
	namespace ReactNavigation {
		interface RootParamList extends TypeRootStackParamList {}
	}
}
