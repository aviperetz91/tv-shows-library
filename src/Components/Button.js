import React from 'react'
import {
    Text,
    TouchableOpacity 
} from 'react-native'

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.press} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>
                {props.txt}
            </Text>
        </TouchableOpacity> 
    )
}

const styles = {
    buttonStyle: {
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#17a2b8',
        paddingRight: 8,
        paddingLeft: 8,
        paddingTop: 0
    },
    textStyle: {
        alignSelf: 'center',
        color: '#17a2b8',
        fontSize: 15,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}

export default Button;