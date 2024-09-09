import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Feather from '@expo/vector-icons/Feather';

export default function InputText() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                placeholder="Descrição da tarefa"
                placeholderTextColor={"#808080"}
            >
            </TextInput>
            <TouchableOpacity style={styles.buttonInput}>
            <Feather name="plus" size={21} color="#f2f2f2"  style={styles.buttonIcon} />
            </TouchableOpacity>
        </View>
    )
}