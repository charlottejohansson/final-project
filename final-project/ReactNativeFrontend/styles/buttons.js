
import { StyleSheet, Text, Image, TouchableHighlight } from "react-native";
import { palette } from "./colors";
import { spacing } from "./spacing";
import { size, lineheight } from './typography'

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
    borderRadius: spacing.L,
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
    borderRadius: spacing.L,
  },

  text: {
    fontSize: size.M,
    lineHeight: lineheight.M,
    color: palette.frostbite,
  },
})

export const PrimaryIconBtn = ({ source, onPress }) => (
  <TouchableHighlight style={primaryIcon.button} onPress={onPress}>
    <Image style={primaryIcon.icon} source={source}/>
  </TouchableHighlight>
)

const primaryIcon = StyleSheet.create({
  button: {
    backgroundColor: palette.frostbite,
    paddingTop: spacing.XS,
    paddingBottom: spacing.XS,
    paddingLeft: spacing.XS,
    paddingRight: spacing.XS,
    borderRadius: spacing.L,
  },
  
  icon: {
    width: 30,
    height: 30,
  },
})