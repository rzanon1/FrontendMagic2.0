import React,  { useState } from "react";
import { ImageBackground, SafeAreaView, Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();
    
    const onLoginPressed = () =>  {
       
        //validar ele 
        navigation.navigate('Home');
    }


    const onSignupScreen = () => {
      

      navigation.navigate('Signup');
    }

    return (
    <View style={styles.container}>
    <ImageBackground
    source={require('../../../assets/Nicol.png')}
    style={styles.backgroundImage}
  >
    <SafeAreaView style={{flex: 1,}}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Image source={require('../../../assets/Icone.png')}
          style={styles.headerImg}
          alt="Logo"
          />
          <Text style={styles.title}>Seja bem-vindo a tela de login!</Text>
          <Text style={styles.subtitle}>Acesse e organize seus deck de Magic: The Gathering™</Text>

            <CustomInput 
            placeholder="Usuário"
            value={username} 
            setValue={setUsername}
            />
            <CustomInput 
            placeholder="Senha" 
            value={password} 
            setValue={setPassword}
            secureTextEntry={true}
            />

            <CustomButton text="Entrar" onPress={onLoginPressed}/>
            <TouchableOpacity 
            style={{marginTop: 'auto'}}
            onPress={onSignupScreen}>
           <Text style={styles.formFooter}>
            Não possui uma conta ?{' '}
            <Text style={{ textDecorationLine: 'underline'}}>Criar conta</Text>            
            </Text>     
          </TouchableOpacity>
        </View>
        </View> 
    </SafeAreaView>
    </ImageBackground>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#0C004A'
  },

  innerContainer: {
   padding: 24,
   flex: 1,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    opacity: 0.7
    
  },

  header: {
    marginVertical:36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#B3B1AF',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 500,
    color: '#AD4639',
    textAlign: 'center',
  },
  formFooter:{
    fontSize: 17,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: 0.1,
  },
  
});

export default LoginScreen;