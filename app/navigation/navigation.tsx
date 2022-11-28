import React, {FC} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {useAuth} from "../hooks/useAuth";
import Auth from "../components/screens/auth/auth";
import Profile from "../components/screens/profile/profile";
import Home from "../components/screens/home/home";

const Stack = createNativeStackNavigator()

const Navigation: FC = () => {
	const {user} = useAuth();

	return (
			<NavigationContainer>
				<Stack.Navigator screenOptions={{headerShown: false}}>
					{user ? (
							<>
								<Stack.Screen name={"Home"} component={Home}/>
								<Stack.Screen name={"Profile"} component={Profile}/>
							</>
					) : <Stack.Screen name={"Auth"} component={Auth}/>}
				</Stack.Navigator>
			</NavigationContainer>
	);
};

export default Navigation;
