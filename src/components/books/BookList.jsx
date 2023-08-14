import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import bookList from '../../data.js';
import BookItem from './BookItem.jsx';

const BookList = () => {
    return (
    <View
    style={styles.container}>
        <FlatList
        data={bookList}
        style={styles.bookList}
        renderItem={({item}) =>
            <BookItem book={item}/>
        }
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        alignItems: 'center',
        width: '100%',
        padding: 20
    },
    bookList: {
        width: '100%'
    },
});

export default BookList;