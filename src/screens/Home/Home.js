import React, {Component} from 'react';
import { FlatList, StatusBar } from 'react-native';
import { Container, Header, Body, Right, Button, Icon, Title } from 'native-base';
import axios from 'axios';
import styles from './style';
import Show from '../../Components/Show';
import SearchBar from '../../Components/SearchBar';

class Home extends Component {
    state = {
        shows: [],
        filteredShows: [],
        searchActive: false
    }

    componentDidMount = () => {
        axios.get('https://api.tvmaze.com/shows')
        .then(response => this.setState({
            shows: response.data,
            filteredShows: response.data
        }));
    }

    displaySearch = () => {
        if (this.state.searchActive) {
            return <SearchBar
                    txt={"Search"}
                    placeholder={"Enter a TV-Show name"}
                    filterSearch={this.filterSearch}/>
        }
        return;
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
            <Container style={styles.containerStyle}>

                <Header style={styles.headerStyle}>
                    <StatusBar backgroundColor="#343434" />
                    <Body style={styles.titleContainerStyle}>
                        <Title>TV-Shows</Title>
                    </Body>
                    <Right>
                        <Button 
                            transparent
                            onPress={() => {
                                const toggle = !this.state.searchActive;
                                this.setState({searchActive: toggle})
                            }}>
                            <Icon name='search' />
                        </Button>
                    </Right>
                </Header>

                {this.displaySearch()}
                
                <FlatList 
                    data={this.state.filteredShows}
                    keyExtractor={show => show.id.toString()}
                    renderItem={(show) => (
                        <Show 
                            show={show.item}
                            navigation={this.props.navigation}
                        />
                    )}/>

            </Container>  
        )
    }
}

export default Home;