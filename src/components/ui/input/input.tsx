import React, {FC} from "react";
import {IInput} from "./input.types";
import styled from "styled-components/native";

export const Input: FC<IInput> = ({onChange, val, placeholder, isSecure}) => {
	const Input = styled.TextInput`
		background: #ffffff;
		width: 100%;
		border-radius: 12px;
		border: 1px solid #000000;
		padding: 14px 12px;
		margin-top: 12px;
		font-size: 14px;
	`;

	return (
		<Input
			placeholder={placeholder}
			onChangeText={onChange}
			value={val}
			secureTextEntry={isSecure}
			showSoftInputOnFocus={false}
			autoCapitalize="none"
			placeholderTextColor="black"
		/>
	);
};
