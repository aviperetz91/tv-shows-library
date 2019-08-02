import React, {Component} from 'react';
import { View, TextInput } from 'react-native';
import Button from '../Button';
import styles from './style';

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
                    placeholder={"Enter a name of TV-Show"}
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

export default PlaceInput;