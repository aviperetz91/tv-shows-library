import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TextInput,
} from 'react-native';
import Button from './Button';


class PlaceInput extends Component{
    state = {
        userInput: "",
    }

    render(){
        return(
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    value={this.state.userInput}
                    placeholder={"Enter a name of TV-Show for search"}
                    onChangeText={(input) => this.setState({userInput: input})}
                ></TextInput>
                <Button
                    txt={"Search"}
                    style={styles.placeButton}
                    press={() => this.props.filterSearch(this.state.userInput)}
                ></Button>
            </View>
        )
    }
}

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
        padding: 7,
        borderWidth: 1,
        borderRadius: 5,
    },
    placeButton: {
        width: "30%"
    },
})


export default PlaceInput;