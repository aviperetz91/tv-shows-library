import React, {Component} from 'react';
import { View, FlatList } from 'react-native';
import axios from 'axios';
import styles from './style';
import Show from '../../Components/Show';
import PlaceInput from '../../Components/PlaceInput';

class Home extends Component {
    state = {
        shows: [],
        filteredShows: []
    }

    static navigationOptions = {
        title: "TV-Shows"
    }

    componentDidMount = () => {
        axios.get('https://api.tvmaze.com/shows')
        .then(response => this.setState({
            shows: response.data,
            filteredShows: response.data
        }));
    }

    filterSearch = (userInput) => {
        if(userInput === "") {
            this.setState({
                filteredShows: this.state.shows
            })
        }
        const searchResult = this.state.shows.filter(show => {
            return show.name.toLowerCase().includes(userInput.toLowerCase());
        })
        this.setState({filteredShows: searchResult});
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <PlaceInput filterSearch={this.filterSearch} />
                <FlatList 
                    data={this.state.filteredShows}
                    keyExtractor={show => show.id.toString()}
                    renderItem={(show) => (
                        <Show 
                            show={show.item}
                            navigation={this.props.navigation}
                        />
                    )}
                />
            </View>   
        )
    }
}

export default Home;