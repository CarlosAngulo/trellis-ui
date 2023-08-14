import { StyleSheet, Text } from "react-native";
import theme from '../../theme.js';

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: '#333',
        fontFamily: theme.fonts.main,
    },
    bold: {
        fontFamily: theme.fonts.title
    },
    title: {
        fontFamily: theme.fonts.title,
        fontSize: 20,
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.secondary
    }
});

export default function StyledText({title, children, color, fontSize, fontWeight, style, ...restOfProps}) {
    const textStyles = [
        styles.text,
        title && styles.title,
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