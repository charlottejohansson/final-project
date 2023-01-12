import { StyleSheet, TextInput} from "react-native";
import { Typography, Colors, Spacing } from '.'

export const InputField = ({ placeholder, onChangeText, secureTextEntry }) => (
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="rgba(252,238,247,0.5)" 
      />
)

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: Colors.palette.darkPurple,
        backgroundColor: Colors.palette.lavenderBlush04,
        color: Colors.palette.lavenderBlush,
        paddingTop: Spacing.spacing.S,
        paddingBottom: Spacing.spacing.S,
        paddingLeft: Spacing.spacing.M,
        paddingRight: Spacing.spacing.S,
        borderRadius: 40,
        fontSize: Typography.size.M,
        lineHeight: Typography.lineheight.M,
        marginBottom: Spacing.spacing.M
    }
})