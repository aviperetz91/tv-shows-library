import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerStyle: {
      flexDirection: "row",
      justifyContent: "space-between"
    },
    imageStyle: {
      height: 350,
      resizeMode: "stretch"
    },
    ratingContainerStyle: {
      justifyContent: "center",
      alignItems: "center",
    },
    infoContainerStyle: {
      marginBottom: 15
    },  
    contentStyle: {
      fontSize: 14,
      fontWeight: "bold",
    }
  })
  
  export default styles;