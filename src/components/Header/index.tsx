import { Text, View } from "react-native";
import { styles } from "./styles";
export default function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
            Lista de Tarefas
            </Text>
            <Text style={styles.subtitle}>
            Adicione suas atividades a lista de tarefas
            </Text>
        </View>
    )
}