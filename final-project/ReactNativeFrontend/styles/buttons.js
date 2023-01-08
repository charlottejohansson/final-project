
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import { palette } from "./colors";
import { spacing } from "./spacing";
import { size, lineheight } from './typography'
import { FontAwesome5 } from '@expo/vector-icons'; 

export const PrimaryBtn = ({ title, onPress }) => (
  <TouchableHighlight style={primary.button} onPress={onPress}>
    <Text style={primary.text}>{title}</Text>
  </TouchableHighlight>
)

const primary = StyleSheet.create({
  button: {
    backgroundColor: palette.frostbite,
    paddingTop: spacing.S,
    paddingBottom: spacing.S,
    paddingLeft: spacing.L,
    paddingRight: spacing.L,
    borderRadius: 30,
    alignItems: "center",
  },
  
  text: {
    fontSize: size.M,
    lineHeight: lineheight.M,
    color: palette.lavenderBlush,
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
    borderColor: palette.frostbite,
    paddingTop: spacing.S,
    paddingBottom: spacing.S,
    paddingLeft: spacing.L,
    paddingRight: spacing.L,
    borderRadius: 30,
  },

  text: {
    fontSize: size.M,
    lineHeight: lineheight.M,
    color: palette.frostbite,
  },
})

export const PrimaryIconBtn = ({ name, size, onPress }) => (
  <TouchableHighlight style={primaryIcon.button} onPress={onPress}>
    <FontAwesome5 name={name} size={size} color='#FCEEF7' />
  </TouchableHighlight>
)

const primaryIcon = StyleSheet.create({
  button: {
    backgroundColor: palette.frostbite,
    padding: spacing.S,
    borderRadius: 30,
  },
})