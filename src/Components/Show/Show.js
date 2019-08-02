import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
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
                <TouchableOpacity onPress={() => props.navigation.navigate("ShowDetails", {
                    show: props.show,
                    title: props.show.name
                })}>
                    <View style={styles.titleContainerStyle}>
                        <Text style={styles.titleTextStyle}>{props.show.name}</Text>
                    </View>
                </TouchableOpacity>
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