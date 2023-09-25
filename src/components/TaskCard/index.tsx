import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import Checkbox from 'expo-checkbox';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TasksList } from "../../screens/Home";

export function TaskCard({ title, done, onRemove }: TasksList) {
    const [isChecked, setChecked] = useState(done);

    function handleRemovedTask() {

    }

    return (
        <View style={styles.taskCard}>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#4630EB' : undefined}
            />
            <Text style={isChecked ? styles.taskCardTextDone : styles.taskCardText}>
                {title}
            </Text>
            <TouchableOpacity
                onPress={onRemove}
            >
                <Text style={styles.taskCardRemove}>
                    <Ionicons name="md-trash" size={24} color="gray" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}