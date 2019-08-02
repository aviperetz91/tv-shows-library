import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    titleContainerStyle: {
        backgroundColor: "#17a2b8",
        borderRadius: 3,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    titleTextStyle: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    ratingContainerStyle: {
        justifyContent: "center",
        alignItems: "center"
    }, 
    imageStyle: {
        height: 300,
        borderRadius: 1,
        resizeMode: "stretch"
    }
})
  
export default styles;