import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import BookList from './books/BookList';
import StyledText from './styled/StyledText';

const Main = () => {
    return (
        <View style={styles.container}>
            <StyledText fontWeight='bold' title>Hola mi Pollís</StyledText>
            <BookList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default Main;