import React, {FC} from "react";
import {View} from "react-native";
import Button from "../../ui/button";
import {auth} from "../../../firebase";
import {signOut} from "firebase/auth";

const Profile: FC = () => {
	return (
			<View>
				<View className="h-full w-full bg-white pt-16">
					<View className="mx-5 justify-center items-center h-full">
						<View className="w-9/12">
								<Button onPress={() => signOut(auth)} title={"Logout"}/>
						</View>
					</View>
				</View>
			</View>
	);
};

export default Profile;
