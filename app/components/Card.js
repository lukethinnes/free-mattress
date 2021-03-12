import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AppText from './AppText'
import colors from '../config/colors'
import { TouchableWithoutFeedback } from 'react-native';

function Card({ title, neighborhood, image, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.neighborhood}>{neighborhood}</AppText>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        backgroundColor: colors.white,
        paddingBottom: 2,
        marginBottom: '60%',
        overflow: 'hidden'
    },
    detailsContainer: {
        padding: 2
    },
    image: {
        width: '100%',
        padding: -40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        marginBottom: 9
    },
    neighborhood: {
        color: 'tomato',
        fontWeight: 'bold'
    }
})
export default Card;