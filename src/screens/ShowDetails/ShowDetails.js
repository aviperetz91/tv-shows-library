import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';
import styles from './style';
import InfoSection from '../../Components/InfoSection';

class ShowDetails extends Component {

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title
  })

  render() {
    const {navigation} = this.props;
    const show = navigation.getParam("show");
    
    return (
      <ScrollView>
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
              <Text style={styles.contentStyle}>Language</Text>
              <Text>{show.language}</Text>
            </View>
            <View style={styles.infoContainerStyle}>
              <Text style={styles.contentStyle}>Network</Text>
              <Text>{show.network.name}</Text>
            </View>
            <View style={styles.infoContainerStyle}>
              <Text style={styles.contentStyle}>Schedule</Text>
              <Text>{show.schedule.time} on {show.schedule.days}</Text>
            </View>
          </View>

          <View style={styles.infoContainerStyle}>
            <Text style={styles.contentStyle}>Genres</Text>
            <Text>{show.genres.join(", ")}</Text>
          </View>

          <View style={styles.infoContainerStyle}>
            <Text style={styles.contentStyle}>Summary</Text>
            <Text>{show.summary}</Text>
          </View>

        </InfoSection>
        
      </ScrollView>
    );
  }
}

export default ShowDetails;