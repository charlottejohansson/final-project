import { StyleSheet, View, Text } from "react-native";
import { Link } from 'react-router-native';
import { Typography, Colors, Spacing } from '.'
import { FontAwesome5 } from '@expo/vector-icons'; 

export const Heading = () => (
    <View style={styles.header}>
     <Link to="/">
        <FontAwesome5 
            style={styles.icon} 
            name="chevron-left" 
            size={20} 
            color={Colors.palette.lavenderBlush} />
     </Link>
        <Link to="/">
            <Text style={styles.text}>Stream.guide</Text>
        </Link>
        <Link to='/login'>
        <FontAwesome5 
            style={styles.icon} 
            name="user-circle" 
            size={24} 
            color={Colors.palette.lavenderBlush} />
        </Link>
    </View>
)

const styles = StyleSheet.create({
    text: {
        fontSize: Typography.size.M,
        lineHeight: Typography.lineheight.M,
        color: Colors.palette.lavenderBlush,
    },
  
    icon: {
        paddingVertical: 3,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: Spacing.spacing.XXL,
        paddingBottom: Spacing.spacing.M,
        width: "100%",
        paddingHorizontal: 20
    },
})