import React, {Component} from 'react';
import {
    FlatList
} from 'react-native';
import axios from 'axios';
import styles from './style';
import Show from '../../Components/Show';


class Home extends Component {
    state = {
        shows: []
    }

    static navigationOptions = {
        title: "TV-Shows"
    }

    componentDidMount = () => {
        axios.get('https://api.tvmaze.com/shows')
        .then(response => this.setState({
            shows: response.data
        }));
    }

    render() {
        return (
            <FlatList 
                style={styles.containerStyle}
                data={this.state.shows}
                keyExtractor={show => show.id.toString()}
                renderItem={(show) => (
                    <Show 
                        show={show.item}
                        navigation={this.props.navigation}
                    />
                )}
            />
        )
    }
}

export default Home;