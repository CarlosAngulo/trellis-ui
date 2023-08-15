import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import StyledText from '../styled/StyledText';
import theme from '../../theme';
import NavigationBar from '../system/NavigationBar';

const UploadPDF = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <StyledText title align={'center'} style={{color: theme.colors.primary}}>
                    PDF uploader
                </StyledText>
                <Button title='Select a Pdf' color={theme.colors.primary} style={styles.button}></Button>
                <StyledText small align='center' style={{maxWidth: 300}}>Plase select a pdf document from your device to upload an process.</StyledText>
                <Image style={styles.image} source={require('./upload.png')} />
            </View>
            <NavigationBar navigation={navigation} active='Upload PDF' />
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },
    container: {
        alignItems: 'center',
        gap: 40,
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30
    },
    image: {
        width: 200,
        height: 200,
    },
    button: {
        padding: 20,
        overflow: 'hidden'
    }
})

export default UploadPDF;