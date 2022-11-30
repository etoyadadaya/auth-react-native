import React, {FC} from "react";
import {Text} from "react-native";
import {IButton} from "./button.types";
import styled from "styled-components/native";

export const Button: FC<IButton> = ({onPress, title}) => {
	const Button = styled.TouchableHighlight`
		color: #000000;
		border-radius: 12px;
		width: 100%;
		border: 1px solid #000000;
		margin: 10px 0;
		padding: 12px 20px;
		background: #ffffff;
	`;

	const Text = styled.Text`
		text-align: center;
	`;

	return (
		<Button
				onPress={onPress}
				underlayColor="#6563ee"
		>
			<Text>{title}</Text>
		</Button>
	);
};
