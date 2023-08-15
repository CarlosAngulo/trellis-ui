import { StyleSheet, Text } from "react-native";
import theme from '../../theme.js';

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: '#333',
        fontFamily: theme.fonts.main,
    },
    bold: {
        fontFamily: theme.fonts.title,
        fontSize: 20,
    },
    title: {
        fontFamily: theme.fonts.title,
        fontSize: 30,
        paddingTop: 20,
        paddingBottom: 10,
    },
    small: {
        fontSize: 12,
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

export default function StyledText({title, children, color, fontSize, align, fontWeight, style, small, ...restOfProps}) {
    const textStyles = [
        styles.text,
        title && styles.title,
        small && styles.small,
        align === 'center' && styles.alignCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontWeight === 'bold' && styles.bold,
        fontSize,
        style
    ]

    return(
        <Text style={textStyles} {...restOfProps}>
            { children }
        </Text>
    )
}