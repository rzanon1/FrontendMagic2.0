import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";


const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return(
        <View style={styles.container}>
            <TextInput
            value={value} 
            onChangeText={setValue}
            placeholder={placeholder} 
            style={styles.input}    
            secureTextEntry={secureTextEntry}
            />
        </View>
    );


} ;     

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: 300,
        alignSelf: 'center',
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
    },
    input:{},

});


export default CustomInput;