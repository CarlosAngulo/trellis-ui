import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import theme from '../../theme.js';

const Reader = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.readingContainer}></View>
            <View style={styles.controlsContainer}>
                <Ionicons name="play-circle" size={34} color={theme.colors.primary} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexGrow: 1,
    },
    readingContainer: {
        flexGrow: 1,
    },
    controlsContainer: {
        height: 70,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20
    }
})


export default Reader;