import React from 'react';
import { StyleSheet, View } from 'react-native';
import StyledText from '../styled/StyledText.jsx';
import theme from '../../theme.js';

const BookItem = ({book}) => {
    return (
        <View style={styles.bookItem}>
            <View style={styles.bookItemIcon}>
                <StyledText fontWeight='bold' style={{color: theme.colors.white}}>{book.title}</StyledText>
            </View>
            <View>
                <StyledText fontWeight='bold' >{book.title}</StyledText>
                <StyledText>{book.description}</StyledText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bookItemIcon: {
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        padding: 20,
        color: theme.colors.white
    },
    bookItem: {
        padding: 10,
        borderBottomColor: '#EEE',
        borderBottomWidth: 1,
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    }
});

export default BookItem;