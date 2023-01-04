
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { lineheight, size } from "./typography";
import { palette } from "./colors";
import { spacing } from "./spacing"

export const PrimaryBtn = ( desc ) => (
    <TouchableHighlight style={primary.button}>
           <Text style={primary.text}>{desc}</Text>
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

export const SecondaryBtn = () => (
     <TouchableHighlight style={secondary.button}>
            <Text style={secondary.text}>lorem</Text>
   </TouchableHighlight>
 )

const secondary = StyleSheet.create({
    button: {
        border: '1px',
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