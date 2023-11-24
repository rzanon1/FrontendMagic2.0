import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';


const HomeScreen = () => {
    return(
        <View>
       <Text style={{fontSize:27, fontWeight: 'bold', alignSelf:'center'}}>Façam a home aqui</Text>
        
        </View>
    )
}

const styles = StyleSheet.create({

    imagem: {
        resizeMode: 'cover'
        

    },


});
export default HomeScreen