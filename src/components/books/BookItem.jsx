import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import StyledText from '../styled/StyledText.jsx';
import theme from '../../theme.js';

const abbreviation = (name) => {
    const words = name.toUpperCase().split(' ');
    return words[0][0] + words[1][0];
}

const BookItem = ({navigation, book}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Book Chat')}>
            <View style={styles.bookItem}>
                <View style={styles.bookItemIcon}>
                    <StyledText fontWeight='bold' align="center" style={{color: theme.colors.white}}>
                        {abbreviation(book.title)}
                    </StyledText>
                </View>
                <View style={{flexGrow: 1}}>
                    <StyledText fontWeight='bold'>{book.title}</StyledText>
                    <StyledText>{book.description}</StyledText>
                </View>
                <View>
                    <Ionicons name="play-circle" size={28} color={theme.colors.secondary} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    bookItemIcon: {
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        padding: 5,
        color: theme.colors.white,
        width: 68,
        height: 68,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bookItem: {
        padding: 10,
        borderBottomColor: '#EEE',
        borderBottomWidth: 1,
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        width: '100%'
    }
});

export default BookItem;