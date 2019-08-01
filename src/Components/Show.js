import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

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
                    <Text>Average Raiting Stars: {props.show.rating.average}</Text>
                </View>
            </CardSection>

        </Card>
    )
}

const styles = StyleSheet.create({
    titleContainerStyle: {
        backgroundColor: "#17a2b8",
        borderRadius: 3,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    titleTextStyle: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    ratingContainerStyle: {
        justifyContent: "center",
        alignItems: "center"
    }, 
    imageStyle: {
        height: 300,
        resizeMode: "stretch"
    }
})

export default Show;