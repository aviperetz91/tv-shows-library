import React from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 20,
    }
})

export default Card;