import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';

import colors from '../config/colors'
import Screen from '../components/Screen'

const listings = [
    {
        id: 1,
        title:  'Some tight futon',
        neighborhood: '17th & Vine',
        image: require('../assets/mattress1.png')
    },
    {
        id: 2,
        title:  'Only used once!',
        neighborhood: 'Broadway & Mississippi',
        image: require('../assets/mattress2.png')
    },
    {
        id: 3,
        title: 'Yasss Queen',
        neighborhood: 'Behind Church\'s Chicken on MLK',
        image: require('../assets/mattress3.png')
    },
    {
        id: 4,
        title: 'Better put a ring on it, she\'s a keeper!',
        neighborhood: 'Commerce City Kingdom Hall',
        image: require('../assets/mattress4.png')
    },
    {
        id: 5,
        title: 'Are we Twinning Rn?!',
        neighborhood: 'Off I-77 somewhwere',
        image: require('../assets/mattress5.png')
    },
    {
        id: 6,
        title: 'Thie California King \'bout to get lifted!',
        neighborhood: 'Behind the Greyhound Station on 19th',
        image: require('../assets/mattress6.png')
    },
    {
        id: 7,
        title: 'Save some for the rest of us why don\'t ya?!',
        neighborhood: 'Colfax & Federal',
        image: require('../assets/mattress7.png')
    },
    {
        id: 8,
        title: 'Try not to doze off just looking at it!',
        neighborhood: '28th & Humbolt',
        image: require('../assets/mattress8.png')
    },
    {
        id: 9,
        title: 'Beauty alert!! Sign me up!',
        neighborhood: '21st & Krameria',
        image: require('../assets/mattress9.png')
    },
]

function ListingScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <FlatList
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({ item }) =>
            <Card
                title={item.title}
                neighborhood={item.neighborhood}
                image={item.image}
                onPress={()=> navigation.navigate('ListingDetailsScreen', item) }
                />
            }
            />
        </Screen>
    )}

    const styles = StyleSheet.create({
        screen: {
            padding: 20,
            backgroundColor: colors.light
        }
    })
export default ListingScreen;