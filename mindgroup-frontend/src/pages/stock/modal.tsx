import React from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type ProductModalProps = {
    id: number;
    onClose: () => void;
    onDelete: () => void;
};

export function ProductModal({ id, onClose, onDelete }: ProductModalProps) {
    const navigation = useNavigation<NavigationProp<any>>();

    const handleEditPress = () => {
        onClose();
        navigation.navigate("editProduct", { id: id }); 
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{ flex: 1, zIndex: 9 }} onPress={onClose} />
            <View style={styles.content}>
                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={handleEditPress}
                >
                    <Text style={styles.actionText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={onDelete}
                >
                    <Text style={[styles.actionText, styles.cancelText]}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    content: {
        width: '80%',
        marginVertical:20,
        marginLeft:10,
        marginRight:10
        
    },
    actionButton: {
        justifyContent:'center',
        zIndex:99,
        backgroundColor:'#FFF',
        borderRadius:6,
        marginTop: 8,
        padding: 8,
        borderWidth:1,
        marginLeft:40

    },
    actionText: {
        textAlign:'center',
        color: 'black',
        fontSize: 16,
    },
    cancelText: {
        color:'red',
        fontWeight: 'bold',
    },
});
