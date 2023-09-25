import { Text, TextInput, TouchableOpacity, View, Image, Alert } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import { TaskEmpty } from "../../components/TaskEmpty";
import { TaskCard } from "../../components/TaskCard";

export type TasksList = {
    id?: string;
    title: string;
    done: boolean;
    onRemove: () => void;
}

export default function Home() {
    const [tasks, setTasks] = useState<TasksList[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState("");

    function handleAddTask() {
        setTasks((tasks) => [...tasks, {
            id: new Date().getTime().toString(),
            title: newTaskTitle,
            done: false,
            onRemove: () => {
                
            }
        }]);

        setNewTaskTitle("");
    }

    function handleRemovedTask(id: string | undefined) {
        Alert.alert("Remover", "Deseja remover a tarefa?", [
            {
                text: "Não",
                style: "cancel"
            },
            {
                text: "Sim",
                onPress: () => {
                    setTasks((tasks) => tasks.filter(task => task.id !== id));
                }
            }
        ])
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Image 
                style={styles.headerImg} 
                source={require('../../assets/Logo.png')} 
            />
        </View>

        <View style={styles.content}>
            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setNewTaskTitle}
                    value={newTaskTitle}
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleAddTask}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.stats}>
                <View style={styles.stat}>
                    <Text style={styles.statCreated}>Criadas</Text>
                    <Text style={styles.statNumber}>0</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statCompleted}>Concluídas</Text>
                    <Text style={styles.statNumber}>0</Text>
                </View>
            </View>
            <View style={styles.tasks}>
                {
                    tasks.length > 0 ? 
                    tasks.map(task => (
                       <TaskCard 
                            key={task.id}
                            title={task.title}
                            done={task.done}
                            onRemove={() => 
                                handleRemovedTask(task.id)
                            }
                        /> 
                    )) : 
                    <TaskEmpty />
                }
            </View>
        </View>
      </View>
    );
  }