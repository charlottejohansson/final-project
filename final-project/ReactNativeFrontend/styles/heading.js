import { StyleSheet, View, Link, Text } from "react-native";
import { palette } from "./colors";
import { size, lineheight } from "./typography"
import { spacing } from "../styles/spacing";
import { FontAwesome5 } from '@expo/vector-icons'; 

export const Heading = () => (
    <View style={styles.header}>
        <Link to="/">
            <Text style={styles.text}>Stream.guide</Text>
        </Link>
        <Link to='/login'>
        <FontAwesome5 
            style={styles.icon} 
            name="user-circle" 
            size={24} 
            color={palette.lavenderBlush} />
        </Link>
    </View>
)

const styles = StyleSheet.create({
    text: {
        fontSize: size.M,
        lineHeight: lineheight.M,
        color: palette.lavenderBlush,
    },
  
    icon: {
        position: "absolute",
        right: -93,
        paddingVertical: 3,
    },

    header: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: spacing.XXL,
        paddingBottom: spacing.M,
        width: "100%",
    },
})
