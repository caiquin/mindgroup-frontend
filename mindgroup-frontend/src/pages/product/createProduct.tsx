import React, { useState } from "react";
import { Text, View, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { style } from "./style";
import { Input } from "../../components/input"; 
import { Button } from "../../components/button/button"; 
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function ProductCreation() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

    const navigation = useNavigation<NavigationProp<any>>();

    const handleCreateProduct = async () => {
        try {
            const response = await fetch('http://192.168.0.8:3000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    description,
                    price: parseFloat(price),
                    stock: parseInt(stock)
                })
            });

            if (response.ok) {
                Alert.alert("Sucesso", "Produto criado com sucesso!");
                navigation.goBack();
            } else {
                const data = await response.json();
                Alert.alert("Erro", data.message || "Não foi possível criar o produto.");
            }
        } catch (error) {
            console.error("Erro ao criar produto:", error);
            Alert.alert("Erro", "Ocorreu um erro ao criar o produto.");
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={style.container}>
                <View style={style.boxTop}>
                    <Text style={style.title}>Cadastre seu Produto</Text>
                </View>  
                <View style={style.boxMid}>
                    <Input 
                        title="Nome"
                        value={name}
                        onChangeText={setName}
                    />
                    <Input
                        title="Descrição"
                        value={description}
                        onChangeText={setDescription}
                    />
                    <Input
                        title="Preço"
                        value={price}
                        onChangeText={setPrice}
                        keyboardType="numeric"
                    />
                    <Input
                        title="Quantidade"
                        value={stock}
                        onChangeText={setStock}
                        keyboardType="numeric"
                    />
                </View>
                <View style={style.boxBottom}>
                    <Button text="Criar" onPress={handleCreateProduct} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
