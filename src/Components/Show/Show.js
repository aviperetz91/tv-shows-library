import React from 'react';
import { View, Image } from 'react-native';
import { Button, Text } from 'native-base';
import Card from '../Card';
import CardSection from '../CardSection';
import styles from './style';

const Show = (props) => {
    return (
        <Card>
            <CardSection>
                <Image
                    style={styles.imageStyle}
                    source={{uri: props.show.image.original}}>
                </Image>
            </CardSection>

            <CardSection>
                <Button 
                    block 
                    style={styles.buttonStyle}
                    onPress={() => props.navigation.navigate("ShowDetails", {
                        show: props.show,
                        title: props.show.name
                    })}
                >
                    <Text style={styles.titleTextStyle}>{props.show.name}</Text>
                </Button>
            </CardSection>

            <CardSection>
                <View style={styles.ratingContainerStyle}>
                    <Text>Average Rating Stars: {props.show.rating.average}</Text>
                </View>
            </CardSection>

        </Card>
    )
}

export default Show;