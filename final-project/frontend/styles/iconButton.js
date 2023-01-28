import { StyleSheet, TouchableHighlight } from "react-native";
import { Colors, Spacing } from '.'
import { FontAwesome5 } from '@expo/vector-icons'; 

export const IconBtn = ({ name, size, onPress }) => (
    <TouchableHighlight style={iconBtn.button} onPress={onPress}>
      <FontAwesome5 name={name} size={size} color='#FCEEF7' />
    </TouchableHighlight>
  )
  
  const iconBtn = StyleSheet.create({
    button: {
      backgroundColor: Colors.palette.frostbite,
      padding: Spacing.spacing.S,
      borderRadius: 30,
    },
  })