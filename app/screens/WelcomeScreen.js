import React from 'react';
import { View, ImageBackground, StyleSheet, Image } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen({ navigation }) {
    
    return (
        <ImageBackground 
        blurRadius={3}
        style={styles.background}
        source={require("../assets/welcomebackground.jpg")}>
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/FreeMattress.png')} />
            <Image style={styles.text} source={require('../assets/FMText.png')} />
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title='Free Mattresses Near You' onPress={() => navigation.navigate("Login")} />
                {/* <AppButton title='Register'  color="secondary" onPress={() => navigation.navigate("Register")}/> */}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: '100%',
        marginBottom: 200
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 50,   
        alignItems: 'center'
    },
    text:{
        width: '150%',
        height: '40%',
        position: 'absolute',
        top: 90
    },
}
)
export default WelcomeScreen;