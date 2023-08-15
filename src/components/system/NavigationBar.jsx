import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import StyledText from '../styled/StyledText';
import theme from '../../theme';

const NavigationBar = ({ navigation }) => {
    return (
        <View style={styles.navigationBar}>
            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <View style={styles.navigationButtons}>
                    <Ionicons name="headset" size={28} color={theme.colors.primary} />
                    <StyledText align='center' style={{fontSize:10}}>Listen</StyledText>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Upload PDF')}>
                <View style={styles.navigationButtons}>
                    <Ionicons name="add-circle" size={28} color={theme.colors.primary} />
                    <StyledText align='center' style={{fontSize:10}}>Add content</StyledText>
                </View>
            </TouchableOpacity>
            <View style={styles.navigationButtons}>
                <Ionicons name="settings" size={28} color={theme.colors.primary} />
                <StyledText align='center' style={{fontSize:10}}>Settings</StyledText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navigationBar: {
        backgroundColor: 'white',
        width: '70%',
        borderRadius: 30,
        marginBottom: 25,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: 2,
        height: 60,
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 34,
        paddingRight: 34,
    },
    navigationButtons: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default NavigationBar;