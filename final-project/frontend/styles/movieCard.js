
import { StyleSheet, View, Image, Text } from "react-native"
import { Typography, Containers, Spacing, Colors } from '.'
import { LinearGradient } from 'expo-linear-gradient'

export const MovieCard = ({ source, title }) => (
    <View style={{
        flex: 1,
        width: 150,
        marginBottom: 20,
        marginHorizontal: 10,
        flexGrow: 1
    }}>
        <Image
            style={styles.Image}
            source={source}/>
        <LinearGradient
            colors={['rgba(0,0,0,0.8) 20%', 'transparent']}
           style={styles.overlay}/>
        <Text style={styles.text}>{title}</Text>
    </View>
)

const styles = StyleSheet.create({
    Image: {
        resizeMode: "Contain",
        justifyContent: "flex-start",
        height: 200,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.palette.darkPurple,
    },
  
    text: {
        color: Colors.palette.lavenderBlush,
        fontSize: Typography.size.S,
        position: "absolute",
        top: 15,
        left: 15,
        flex: 1,
        width: 130
    },
  
    overlay: {
        width: "100%", 
        height: 200,
        position: "absolute",
        top: 0, 
        left: 0
    }
})