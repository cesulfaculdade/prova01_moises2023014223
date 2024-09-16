import { Alert, FlatList, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import { useState } from "react";
import Feather from '@expo/vector-icons/Feather';
import Card from "../../components/Card";
export default function Home() {

    const [products, setProducts] = useState<string[]>([])
    const [productName, setProductName] = useState('')
    function addProduct(newProduct: string){
        setProducts([...products,newProduct]);
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <Header />
            <View style={styles.containerHeader}>
                <TextInput style={styles.input}
                    placeholder="Descrição da tarefa"
                    onChangeText={text => setProductName(text)}
                    placeholderTextColor={"#808080"}
                    value={productName}
                >
                </TextInput>
                <TouchableOpacity style={styles.buttonInput} onPress={addProduct(productName)}>
                    <Feather name="plus" size={21} color="#f2f2f2" style={styles.buttonIcon} />
                </TouchableOpacity>
            </View>
            <Text style={styles.titleList}>
                Tarefas Pendentes
            </Text>

                <FlatList
                    data={products}
                    keyExtractor={item => item}
                    renderItem={(item) => <Card title={`${item}`}></Card>}
                    ListEmptyComponent={
                        <View style={styles.emptyContainer} >
                            <Text style={styles.emptyText}>
                                Realizou todas as tarefas? Adicione tarefas a sua lista de pendências
                            </Text>
                        </View>
                    }
                    style={styles.list}
                    
                ></FlatList>
      
        </View>
    )
}