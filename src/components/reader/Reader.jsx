import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import theme from '../../theme.js';
import chatHistory from '../../chat.js';
import StyledText from '../styled/StyledText.jsx';

const Reader = ({navigation}) => {
    const chat = chatHistory.map((chatItem) => 
        <View key={chatItem.key} style={ chatItem.user === 1 ? styles.chatSystem : styles.chatUser}>
            <StyledText style={{color: chatItem.user === 1 ? theme.colors.white : theme.colors.textPrimary}}>
                {chatItem.message}
            </StyledText>
        </View>
    )
    return (
        <View style={styles.mainContainer}>
            <View style={styles.readingContainer}>
                {chat}
            </View>
            <View style={styles.controlsContainer}>
                <Ionicons name="mic-circle" size={44} color={theme.colors.primary} />
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
        padding: 20,
        gap: 12,
        justifyContent: 'flex-end',
        backgroundColor: '#FFF',
        margin: 10,
        borderRadius: 8
    },
    controlsContainer: {
        height: 90,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20
    },
    chatUser: {
        backgroundColor: '#EEE',
        borderRadius: 8,
        color: theme.colors.white,
        padding: 10,
        marginRight: 60
    },
    chatSystem: {
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        color: theme.colors.white,
        padding: 10,
        marginLeft: 60
    }
})


export default Reader;