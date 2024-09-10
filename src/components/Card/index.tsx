import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import EvilIcons from '@expo/vector-icons/EvilIcons';
type Props = {
    title: string;
}

export default function Card({title}:Props){
    return(
        <View style={styles.container}>
   
                <Text style={styles.card}>
                   {title}
                </Text>
                <TouchableOpacity style={styles.cardButton} >
                    <Text style={{margin: "auto"}}>
                    <EvilIcons name="trash" size={33} color="#f2f2f2" />
                    </Text>
                </TouchableOpacity>
      
        </View>
    )
}