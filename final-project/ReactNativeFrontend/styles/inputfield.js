import { StyleSheet, TextInput} from "react-native";
import { palette } from "./colors";
import { Spacing, Typography, Colors } from '../styles'
import { size, lineheight } from "./typography"

export const InputField = ({ placeholder, onChangeText }) => (
    <TextInput
        style={primary.input}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="rgba(252,238,247,0.5)" 
      />
)

const primary = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: palette.darkPurple,
        backgroundColor: palette.lavenderBlush04,
        color: palette.lavenderBlush,
        paddingTop: size.M,
        paddingBottom: size.M,
        paddingLeft: size.M,
        paddingRight: size.M,
        borderRadius: 30,
        fontSize: size.M,
        lineHeight: lineheight.M,
    }
})