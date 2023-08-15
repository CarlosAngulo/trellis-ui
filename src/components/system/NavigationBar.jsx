import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import StyledText from '../styled/StyledText';
import theme from '../../theme';

const NavigationBar = ({ navigation, active }) => {
    const buttonsSetup = [
        {
            name: 'Main',
            iconName: 'headset',
            text: 'Listen'
        },
        {
            name: 'Upload PDF',
            iconName: 'add-circle',
            text: 'Add content'
        },
        {
            name: 'Settings',
            iconName: 'settings',
            text: 'Settings'
        },
    ];

    const buttons = buttonsSetup.map((button) => 
        <TouchableOpacity
            onPress={() => navigation.navigate(button.name)}
            style={{opacity: active === button.name ? 1 : 0.4}}>
            <View style={styles.navigationButtons}>
                <Ionicons name={button.iconName} size={28} color={theme.colors.primary} />
                <StyledText align='center' style={{fontSize:10}}>{button.text}</StyledText>
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={styles.navigationBar}>
            {buttons}
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