import { StyleSheet, TextInput} from "react-native";
import { palette } from "./colors";
import { size, lineheight } from "./typography"
import { spacing } from "./spacing";

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
        paddingTop: size.S,
        paddingBottom: size.S,
        paddingLeft: size.M,
        paddingRight: size.S,
        borderRadius: 40,
        fontSize: size.M,
        lineHeight: lineheight.M,
        marginBottom: spacing.M
    }
})