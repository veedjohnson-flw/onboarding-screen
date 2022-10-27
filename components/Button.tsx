import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {StackParamsList} from "../App";

type Props = {
    component: string;
    title: string;
    styled?: boolean;
    params?: {};
}

const Button = ({component, title, params, styled=false}: Props) => {
    const navigation = useNavigation<any>();

    const goToComponent = (component: string) => {
        navigation.navigate(component, params ? params : null)
    }


    return (
        <TouchableOpacity
            onPress={() => goToComponent(component)}
            style={styles.button}
        >
            <View style={styled && styles.coloredButton }>
                <Text style={[styles.btnText, styled ? {color: "white"} : {color: "#FF5805"}]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    coloredButton: {
        backgroundColor: "#FF5805",
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 4,
    },
    button: {
        marginVertical: 10
    },
    btnText: {
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
    }
})