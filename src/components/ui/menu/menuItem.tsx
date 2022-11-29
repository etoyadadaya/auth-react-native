import React, {FC} from "react";
import {View, Text, Linking, Pressable, StyleSheet} from "react-native";
import {IMenuItem} from "./menu.types";
import { MaterialIcons } from "@expo/vector-icons";

export const MenuItem: FC<IMenuItem> = ({item}) => {
    return (
        <Pressable
            className="flex-row bg-white p-4 rounded-2xl justify-between m-4"
            style={styles.boxShadow}
            onPress={() => Linking.openURL(item.link)}
        >
            <View className="w-10/12">
                <Text style={styles.font} className="text-xl text-gray-800 font-bold">{item.title}</Text>
                <Text style={styles.font} className="mt-1 text-gray-500 opacity-90">{item.description}</Text>
            </View>
            <View className="rounded-full bg-blue-500 w-9 h-9 items-center justify-center">
                <MaterialIcons name={item.iconName} size={22} color="#EDF4FE"/>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 5
    },
    font: {
        fontSize: 16
    }
});