import { StyleSheet, Text, TouchableHighlight } from "react-native";
import { Typography, Colors, Spacing } from '.'

export const Button = ({ title, onPress }) => (
  <TouchableHighlight style={buttonStyle.button} onPress={onPress}>
    <Text style={buttonStyle.text}>{title}</Text>
  </TouchableHighlight>
)

const buttonStyle = StyleSheet.create({
  button: {
    backgroundColor: Colors.palette.frostbite,
    paddingTop: Spacing.spacing.S,
    paddingBottom: Spacing.spacing.S,
    paddingLeft: Spacing.spacing.L,
    paddingRight: Spacing.spacing.L,
    borderRadius: 30,
    alignItems: "center",
  },
  
  text: {
    fontSize: Typography.size.M,
    lineHeight: Typography.lineheight.M,
    color: Colors.palette.lavenderBlush,
  },
})