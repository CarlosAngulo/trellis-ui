import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import BookList from './books/BookList';
import StyledText from './styled/StyledText';
import theme from '../theme';
import NavigationBar from './system/NavigationBar';

const Main = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.upperContainer}>
                <StyledText title align={'center'}>Select your book</StyledText>
                <BookList navigation={navigation}/>
            </View>
            <NavigationBar navigation={navigation} active='Main' />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between'
    },
    upperContainer: {
        width: '100%'
    }
});

export default Main;