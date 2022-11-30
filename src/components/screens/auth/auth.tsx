import React, {FC, useState} from "react";
import {Pressable, StatusBar} from "react-native";
import {useAuth} from "@hooks/index";
import {IData} from "./auth.types";
import {Button, Input, Loader} from "@ui/index";
import {useColorScheme} from "@hooks/index";
import styled from 'styled-components/native'

export const Auth: FC = () => {
	const isDark = useColorScheme();

	const [isReg, setIsReg] = useState(false);
	const [data, setData] = useState<IData>({} as IData);

	const {isLoading, login, register} = useAuth();
	const authHandler = async () => {
		const {email, password} = data;

		if (isReg) {
			await register(email, password);
		} else {
			await login(email, password);
		}

		setData({} as IData);
	}

	const Container = styled.View`
		height: 100%;
		width: 100%;
		background: ${props => props.theme.darkNotBlack};
		padding-top: 16px;
	`;

	const Content = styled.View`
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	`;

	const Field = styled.View`
		width: 75%;
	`;

	const Title = styled.Text`
		text-align: center;
		color: ${props => props.theme.white};
		font-size: 24px;
		line-height: 32px;
		font-weight: bold;
	`;

	const Switch = styled.Text`
		color: ${props => props.theme.white};
		text-align: right;
		font-size: 16px;
	`;

	return (
		<Container>
			{isDark ? <StatusBar backgroundColor = '#ffffff'/> : <StatusBar backgroundColor = '#000000'/>}
			<Content>
				<Field>
					<Title>
						{isReg ? "Регистрация" : "Вход"}
					</Title>
					{isLoading ? <Loader /> : <>
						<Input
							onChange={val => setData({...data, email: val})}
							placeholder={"Введите почту"}
							val={data.email}
						/>
						<Input
							onChange={val => setData({...data, password: val})}
							placeholder={"Введите пароль"}
							val={data.password}
							isSecure={true}
						/>
						<Button onPress={authHandler} title={isReg ? "Зарегистрироваться" : "Войти"}/>
						<Pressable onPress={() => setIsReg(!isReg)}>
							<Switch>
								{isReg ? "Войти" : "Зарегистрироваться"}
							</Switch>
						</Pressable>
					</>}
				</Field>
			</Content>
		</Container>
	);
};
