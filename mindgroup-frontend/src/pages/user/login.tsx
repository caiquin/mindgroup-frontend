import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { style } from "./style";
import Logo from "../../assets/image/logo.png";
import {MaterialIcons} from '@expo/vector-icons';
import { Input } from "../../components/input";
import { Button } from "../../components/button/button";
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function Login (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');

    const navigation = useNavigation<NavigationProp<any>>();

    const handleLogin = async () => {
        try{
            const response = await fetch('http://192.168.0.8:3000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password})
            });

            const data = await response.json();

            if (response.ok){
                //Alert.alert('Login sucesso');
                navigation.navigate("Stock");
            }
            else{
                Alert.alert('E-mail ou senha incorreto');
            }
        }catch (error){
            console.log(error);
            Alert.alert('Erro');
        }
    }

    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image style={style.logo}
                    source={Logo}
                    resizeMode="contain"
                />
                <Text style={style.title}>Bem Vindo de Volta</Text>
            </View>  
            <View style={style.boxMid}>
                <Input 
                    title="E-mail"
                    IconRight={MaterialIcons}
                    iconRightName="email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Input
                    title="Senha"
                    IconRight={MaterialIcons}
                    iconRightName="key"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>
            <View style={style.boxBottom}>
                <Button text="Entrar" onPress={handleLogin}/>
                <TouchableOpacity onPress={() => 
                    navigation.navigate("Register")
                }>
                    <Text style={{marginTop:20}}>Não tem conta? Registre-se aqui</Text>
                </TouchableOpacity>

            </View>

        </View>
    )


    
}