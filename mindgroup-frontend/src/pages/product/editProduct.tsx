import React, { useState, useEffect } from "react";
import { Text, View, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { style } from "./style";
import { Input } from "../../components/input"; 
import { Button } from "../../components/button/button"; 
import { useNavigation, NavigationProp, useRoute } from '@react-navigation/native';

type RouteParams = {
    id: number; 
};

export default function EditProduct() {
    const navigation = useNavigation<NavigationProp<any>>();
    const route = useRoute();
    const { id } = route.params as RouteParams; 

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

    const fetchProduct = async () => {
        try {
            const response = await fetch(`http://192.168.0.8:3000/api/products/${id}`);
            const data = await response.json();

            if (response.ok) {
                setName(data.name);
                setDescription(data.description);
                setPrice(data.price.toString());
                setStock(data.stock.toString());
            } else {
                Alert.alert("Erro", data.message || "Não foi possível buscar as informações do produto.");
            }
        } catch (error) {
            console.error("Erro ao buscar produto:", error);
            Alert.alert("Erro", "Ocorreu um erro ao buscar as informações do produto.");
        }
    };

    // Função para atualizar o produto
    const handleUpdateProduct = async () => {
        try {
            const response = await fetch(`http://192.168.0.8:3000/api/products/${id}`, {
                method: 'PUT',
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
                Alert.alert("Sucesso", "Produto atualizado com sucesso!");
                navigation.goBack(); 
            } else {
                const data = await response.json();
                Alert.alert("Erro", data.message || "Não foi possível atualizar o produto.");
            }
        } catch (error) {
            console.error("Erro ao atualizar produto:", error);
            Alert.alert("Erro", "Ocorreu um erro ao atualizar o produto.");
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={style.container}>
                <View style={style.boxTop}>
                    <Text style={style.title}>Editar Produto</Text>
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
                    <Button text="Editar" onPress={handleUpdateProduct} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
