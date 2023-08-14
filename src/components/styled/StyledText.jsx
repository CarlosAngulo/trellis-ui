import { StyleSheet, Text } from "react-native";
import theme from '../../theme.js';

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: '#333',
        fontFamily: theme.fonts.main,
    },
    bold: {
        fontFamily: theme.fonts.title,
        fontSize: 22,
    },
    title: {
        fontFamily: theme.fonts.title,
        fontSize: 30,
        paddingTop: 20,
        paddingBottom: 10
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.secondary
    },
    alignCenter: {
        textAlign: 'center'
    }
});

export default function StyledText({title, children, color, fontSize, align, fontWeight, style, ...restOfProps}) {
    const textStyles = [
        styles.text,
        title && styles.title,
        align === 'center' && styles.alignCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontWeight === 'bold' && styles.bold,
        style
    ]

    return(
        <Text style={textStyles} {...restOfProps}>
            { children }
        </Text>
    )
}