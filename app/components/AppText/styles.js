import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: PlatformOS === "android" ? "Roboto" : "Avenir"
    }
})

export default styles;