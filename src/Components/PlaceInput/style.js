import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    placeInput: {
        width: "70%",
        fontSize: 16,
        backgroundColor: "#fff",
        borderColor: "#17a2b8",
        marginTop: 5,
        marginBottom: 5,
        padding: 6,
        borderWidth: 1,
        borderRadius: 5,
    },
    placeButton: {
        width: "30%"
    },
})
  
export default styles;