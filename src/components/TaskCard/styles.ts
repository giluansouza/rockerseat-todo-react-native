import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskCard: {
        backgroundColor: '#262626',
        padding: 12,
        flexDirection: 'row',
        color: '#FFF',
        fontSize: 14,
        marginBottom: 16,
        borderRadius: 8,
        gap: 8,

        // iOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Android
        elevation: 5,
    },
    checkbox: {
        borderRadius: 50, // Para tornar o checkbox redondo
        borderColor: '#4EA8DE', // Cor da borda quando não está marcado
        borderWidth: 2,
    },
    taskCardText: {
        flex: 1,
        color: '#F2F2F2',
        fontSize: 14,
    },
    taskCardTextDone: {
        flex: 1,
        color: '#F2F2F2',
        fontSize: 14,
        textDecorationLine: 'line-through'
    },
    taskCardRemove: {
        color: '#808080',
        fontSize: 14,
        fontWeight: "400"
    }
  });