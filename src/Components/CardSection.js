import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 0,
        borderRadius: 2,
        padding: 5,
        backgroundColor: "#fff",
        borderColor: "#bbb",
    }
})

export default CardSection;