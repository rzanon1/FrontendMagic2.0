import React from "react";
import {View, Text, StyleSheet, Pressable} from 'react-native';



const CustomButton = ({onPress, text}) => {
    return(
        <Pressable onPress= {onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'tomato',
        alignSelf: 'center',
        padding: 15,
        marginVertical: 5,
        borderRadius: 5,
        width: '15%',
        borderColor: '#000000',
    },
    text: {
        fontWeight:'bold',
        color: 'black',
        alignSelf: 'center',
    },

    container_PRIMARY: {
        backgroundColor: 'tomato',
    },

    container_SECONDARY: {
        borderColor: 'tomato',
        borderWidth: 2,
    },

    container_TERTIARY: {},

    text_SECONDARY:{
        color: 'tomato',
    },

    text_TERTIARY:{
        color: 'grey'
    },



});
export default CustomButton;