import React, { useState, useEffect, useCallback} from "react";
import { Text, View, Image, TouchableOpacity, FlatList, Alert, Modal } from 'react-native';
import { style } from "./style";
import MangaL from "../../assets/image/camisetamangalonga.png";
import { useNavigation, NavigationProp, useFocusEffect } from '@react-navigation/native';
import { ProductModal } from './modal'

type Product = {
    id: number,
    name: string,
    stock: number
};

const ProductList = () => {  
    const [products, setProducts] = useState<Product[]>([]);  
    const navigation = useNavigation<NavigationProp<any>>();
    const [visibleModal, setVisibleModal] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null); 

    const fetchProducts = async () => {
        try {
            const response = await fetch("http://192.168.0.8:3000/api/products");
            const data = await response.json();
            if (response.ok) {
                setProducts(data);  
            } else {
                Alert.alert("Erro", data.message || "Não foi possível buscar os produtos.");
            }
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
            Alert.alert("Erro", "Erro ao buscar produtos.");
        }
    };
    useFocusEffect(
        useCallback(() => {
            fetchProducts();
        }, [])
    );
    
    const handleDeleteProduct = async (id: number) => {
        try {
            const response = await fetch(`http://192.168.0.8:3000/api/products/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                Alert.alert("Produto excluído com sucesso!");
                setProducts(products.filter(product => product.id !== id));
                setVisibleModal(false);
            } else {
                Alert.alert("Erro ao excluir o produto");
            }
        } catch (error) {
            console.error("Erro ao excluir produto:", error);
            Alert.alert("Erro", "Erro ao excluir produto.");
        }
    };

    const _renderCard = (item: Product) => {
        return (
            <TouchableOpacity
                style={style.card}
                onPress={() => {
                    setSelectedProductId(item.id);
                    setVisibleModal(true);
                }}
            >
                <View style={style.rowCard}>
                    <Image
                        style={style.productImage}
                        source={MangaL}
                    />
                    <View>
                        <Text style={style.textCard}>{item.name}</Text>
                        <Text style={style.textCard}>Quantidade: {item.stock}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <View style={style.containerTop}>
                <View style={style.boxTop}>
                    <Text style={style.title}>Seu Estoque</Text>
                </View>
            </View>  
            <View style={{ padding: 15 }}>
                <TouchableOpacity
                    style={style.button}
                    onPress={() => navigation.navigate("createProduct")}
                >
                    <Text style={style.textButton}>+ Novo Produto</Text>
                </TouchableOpacity>
            </View>
            <View style={style.boxList}>
                <FlatList
                    data={products} 
                    style={{ marginTop: 40, paddingHorizontal: 30 }}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => _renderCard(item)}
                />
            </View>

            <Modal
                visible={visibleModal}
                transparent={true}
                onRequestClose={() => setVisibleModal(false)}
            >
                {selectedProductId !== null && (
                    <ProductModal
                        id={selectedProductId}
                        onClose={() => setVisibleModal(false)}
                        onDelete={() => handleDeleteProduct(selectedProductId)}
                    />
                )}
            </Modal>
        </View>
    );
};

export default ProductList;
