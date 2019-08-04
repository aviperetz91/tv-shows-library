import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom: 10
    },
    placeInput: {
        width: "70%",
        fontSize: 16,
        backgroundColor: "#fff",
        borderColor: "#17a2b8",
        padding: 6,
        borderWidth: 1,
        borderRadius: 5,
    },
    placeButton: {
        width: "30%"
    },
})
  
export default styles;