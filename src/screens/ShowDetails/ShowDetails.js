import React, {Component} from 'react';
import { View, Text, Image, ScrollView, StatusBar } from 'react-native';
import { Container, Header, Left, Body, Button, Icon, Title } from 'native-base';
import styles from './style';
import InfoSection from '../../Components/InfoSection';

class ShowDetails extends Component {

  render() {
    const {navigation} = this.props;
    const show = navigation.getParam("show");
    
    return (
      <Container>
        <ScrollView>
          <Header style={styles.headerStyle}>
            <StatusBar backgroundColor="#343434" />
            <Left>
              <Button 
                transparent
                onPress={() => this.props.navigation.navigate("Home")}
                >
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>{show.name}</Title>
            </Body>
          </Header>

          <Image
            style={styles.imageStyle}
            source={{uri: show.image.original}}>
          </Image>

          <InfoSection>
            <View style={styles.ratingContainerStyle}>
              <Text>Average Raiting Stars: {show.rating.average}</Text>
            </View>
          </InfoSection>

          <InfoSection>
            <View style={styles.containerStyle}>
              <View style={styles.infoContainerStyle}>
                <Text style={styles.infoTitleStyle}>Language</Text>
                <Text>{show.language}</Text>
              </View>
              <View style={styles.infoContainerStyle}>
                <Text style={styles.infoTitleStyle}>Network</Text>
                <Text>{show.network.name}</Text>
              </View>
              <View style={styles.infoContainerStyle}>
                <Text style={styles.infoTitleStyle}>Schedule</Text>
                <Text>{show.schedule.time} on {show.schedule.days}</Text>
              </View>
            </View>

            <View style={styles.infoContainerStyle}>
              <Text style={styles.infoTitleStyle}>Genres</Text>
              <Text>{show.genres.join(", ")}</Text>
            </View>

            <View style={styles.infoContainerStyle}>
              <Text style={styles.infoTitleStyle}>Summary</Text>
              <Text>{show.summary}</Text>
            </View>
          </InfoSection>

        </ScrollView>
           
      </Container>
    );
  }
}

export default ShowDetails;