import React, {FC} from "react";
import {TextInput} from "react-native";
import {IInput} from "./input.types";

export const Input: FC<IInput> = ({onChange, val, placeholder, isSecure}) => {
	return (
		<TextInput
				placeholder={placeholder}
				onChangeText={onChange}
				value={val}
				secureTextEntry={isSecure}
				showSoftInputOnFocus={false}
				autoCapitalize="none"
				className="rounded-xl bg-gray-100 mt-3 p-3 w-full"
		/>
	);
};
