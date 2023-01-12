
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import { Typography, Colors, Spacing } from '.'
import { FontAwesome5 } from '@expo/vector-icons'; 

export const PrimaryBtn = ({ title, onPress }) => (
  <TouchableHighlight style={primary.button} onPress={onPress}>
    <Text style={primary.text}>{title}</Text>
  </TouchableHighlight>
)

const primary = StyleSheet.create({
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

export const SecondaryBtn = ({ title, onPress }) => (
     <TouchableHighlight style={secondary.button} onPress={onPress}>
            <Text style={secondary.text}>{title}</Text>
   </TouchableHighlight>
 )

const secondary = StyleSheet.create({
  button: {
    borderWidth: '2px',
    borderColor: Colors.palette.frostbite,
    paddingTop: Spacing.spacing.S,
    paddingBottom: Spacing.spacing.S,
    paddingLeft: Spacing.spacing.L,
    paddingRight: Spacing.spacing.L,
    borderRadius: 30,
  },

  text: {
    fontSize: Typography.size.M,
    lineHeight: Typography.lineheight.M,
    color: Colors.palette.frostbite,
  },
})

export const PrimaryIconBtn = ({ name, size, onPress }) => (
  <TouchableHighlight style={primaryIcon.button} onPress={onPress}>
    <FontAwesome5 name={name} size={size} color='#FCEEF7' />
  </TouchableHighlight>
)

const primaryIcon = StyleSheet.create({
  button: {
    backgroundColor: Colors.palette.frostbite,
    padding: Spacing.spacing.S,
    borderRadius: 30,
  },
})