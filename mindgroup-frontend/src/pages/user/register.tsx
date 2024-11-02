import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { style } from "./style";
import Logo from "../../assets/image/logo.png";
import {MaterialIcons} from '@expo/vector-icons';
import { Input } from "../../components/input";
import { Button } from "../../components/button/button";
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function Register (){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');
    const [name, setName] = useState('');

    const navigation = useNavigation<NavigationProp<any>>();

    const handleRegister = async () => {
        if (!name || !email || !password) {
            Alert.alert("Erro", "Preencha todos os campos");
            return;
        }
        
        try{
            const response = await fetch('http://192.168.0.8:3000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password}),
            });

            const data = await response.json();
            
            if(response.ok){
                Alert.alert('Sucesso', 'Sua conta foi criada com sucesso!')
                navigation.navigate("Login");
            }
            else{
                Alert.alert('Erro', data.message || 'Erro ao criar conta');
            }
        } catch(error){
            console.log(error);
            Alert.alert('Erro', 'Não foi possível conectar ao servidor.')
        }
    }

    return(
        <View style={style.container}>
            <View style={style.boxTopR}>
                <Image style={style.logo}
                    source={Logo}
                    resizeMode="contain"
                />
                <Text style={style.title}>Crie sua Conta</Text>
            </View>  
            <View style={style.boxMidR}>
                <Input
                    title="Nome"
                    value={name}
                    onChangeText={setName}
                />
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
            <View style={style.boxBottomR}>
                <Button text="Registrar" onPress={handleRegister}/>
                <TouchableOpacity
                    onPress={() => 
                        navigation.navigate("Login")
                    }
                >
                    <Text style={{marginTop:20}}>Já tem conta? Logue aqui</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}