import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import BookList from './books/BookList';
import StyledText from './styled/StyledText';
import theme from '../theme';

const Main = () => {
    return (
        <View style={styles.container}>
            <StyledText title>App name</StyledText>
            <BookList/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: 'center',
    }
});

export default Main;