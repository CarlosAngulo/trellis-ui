import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import bookList from '../../data.js';
import BookItem from './BookItem.jsx';

const BookList = () => {
    return (
    <View style={styles.container}>
        <FlatList
        data={bookList}
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
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bookList: {
        marginBottom: 20,
    }
});

export default BookList;