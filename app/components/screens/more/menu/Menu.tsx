import React, {FC} from "react";
import {StyleSheet, Text, View} from "react-native";
import {menu} from "./list";
import MenuItem from "./menuItem";

const Menu: FC = () => {
    return (
        <>
            <View className="flex-row justify-center items-center">
                <Text style={styles.font}>MORE</Text>
            </View>
            <View>
                {menu.map(item => <MenuItem key={item.title} item={item}/>)}
            </View>
        </>
    )
}
export default Menu;

const styles = StyleSheet.create({
    font: {
        fontSize: 24
    }
});