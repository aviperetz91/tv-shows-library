import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerStyle:{
      backgroundColor: "#212529"
    },
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
    },
    footerStyle: {
      backgroundColor: "#212529",
      height: 40
    },
    footerTitleContainer: {
        justifyContent: "center"
    }
  })
  
  export default styles;