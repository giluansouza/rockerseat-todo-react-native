import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import React from "react";

export function TaskEmpty() {
    return (
        <View style={styles.taskEmpty}>
            <Image 
                source={require('../../assets/Clipboard.png')} 
            />
            <Text style={styles.taskEmptyText}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.taskEmptyText2}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}