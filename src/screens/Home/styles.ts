import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0D0D0D',
    },
    header: {
        backgroundColor: '#0D0D0D',
        width: '100%',
        alignItems: 'center',
    },
    headerImg: {
      marginTop: 72,
      marginBottom: 72
    },
    content: {
      flex: 1,
      padding: 24,
      backgroundColor: '#1A1A1A'
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 6,
        color: '#808080',
        padding: 16,
        fontSize: 16,
        marginRight: 12
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: '#1E6F9F',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: -48,
        marginBottom: 36
    },
    listEmptyText: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center'
    },
    stats: {
      flexDirection: 'row',
      justifyContent: 'space-between',  
    },
    stat: {
        fontSize: 14,
        flexDirection: 'row',
        alignItems: "stretch",
    },
    statCreated: {
        color: '#4EA8DE',
        paddingHorizontal: 8,
        fontWeight: 'bold',
        fontSize: 14
    },
    statNumber: {
        color: '#D9D9D9',
        backgroundColor: '#333',
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 2,
        fontWeight: 'bold',
        fontSize: 12
    },
    statCompleted: { 
        color: '#8284FA',
        paddingHorizontal: 8,
        fontWeight: 'bold',
        fontSize: 14
    },
    tasks: {
        alignItems: 'center',
        paddingVertical: 16
    },
    taskEmpty: {
        paddingVertical: 32,
        paddingHorizontal: 24,
        alignItems: 'center',
        color: '#FFF',
        fontSize: 14,
    },
    taskEmptyText: {
        color: '#808080',
        fontSize: 14,
        fontWeight: "700",
        marginTop: 16
    },
    taskEmptyText2: {
        color: '#808080',
        fontSize: 14,
        fontWeight: "400"
    }
  });