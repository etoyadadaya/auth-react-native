import React, {FC, useEffect, useState} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer, useNavigationContainerRef} from "@react-navigation/native";
import {useAuth} from "../hooks/useAuth";
import Auth from "../components/screens/auth/auth";
import Profile from "../components/screens/profile/profile";
import Home from "../components/screens/home/home";
import Payments from "../components/screens/payments/payments";
import Support from "../components/screens/support/support";
import Footer from "../components/layout/footer/footer";
import Services from "../components/screens/services/services";
import More from "../components/screens/more/more";

const Stack = createNativeStackNavigator()

const Navigation: FC = () => {
	const {user} = useAuth();
	const ref = useNavigationContainerRef();

	const [name, setName] = useState<string | undefined>(undefined);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setName(ref.getCurrentRoute()?.name);
		}, 100);

		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		const listener = ref.addListener("state", () =>
			setName(ref.getCurrentRoute()?.name)
		)

		return () => {
			ref.removeListener("state", listener);
		}
	}, []);

	return (
			<>
			<NavigationContainer ref={ref}>
				<Stack.Navigator screenOptions={{headerShown: false}}>
					{user ? (
							<>
								<Stack.Screen name={"Home"} component={Home}/>
								<Stack.Screen name={"Profile"} component={Profile}/>
								<Stack.Screen name={"Payments"} component={Payments}/>
								<Stack.Screen name={"Services"} component={Services}/>
								<Stack.Screen name={"Support"} component={Support}/>
								<Stack.Screen name={"More"} component={More}/>
							</>
					) : (
							<Stack.Screen name={"Auth"} component={Auth}/>
					)}
				</Stack.Navigator>
			</NavigationContainer>
			{user && name && <Footer navigate={ref.navigate} currentRoute={name} />}
			</>
	);
};

export default Navigation;
