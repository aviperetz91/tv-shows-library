import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerStyle: {
      flexDirection: "row",
      justifyContent: "space-between"
    },
    imageStyle: {
      height: 300,
      resizeMode: "stretch"
    },
    ratingContainerStyle: {
      justifyContent: "center",
      alignItems: "center",
    },
    infoContainerStyle: {
      marginBottom: 15
    },  
    infoTitleStyle: {
      fontSize: 15,
      fontWeight: "bold",
    }
  })
  
  export default styles;