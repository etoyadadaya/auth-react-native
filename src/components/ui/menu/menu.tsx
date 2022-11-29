import React, {FC} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {menu} from "./list";
import {MenuItem} from "./menuItem";

export const Menu: FC = () => {
    return (
        <ScrollView>
            <View className="flex-row justify-center items-center">
                <Text style={styles.font}>MORE</Text>
            </View>
            <View>
                {menu.map(item => <MenuItem key={item.title} item={item}/>)}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    font: {
        fontSize: 24
    }
});