import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

const InfoSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: "#f1f1f1",
        borderWidth: 1,
        borderColor: "#bbb",
        borderRadius: 2,
        padding: 8,
        margin: 8
    }
})
    



export default InfoSection;