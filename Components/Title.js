import { StyleSheet, Text, View,SafeAreaView, Platform } from 'react-native';
import {useFonts} from "expo-font"
const Title = () => {
  const [fontsLoaded]=useFonts({
    'MaisondeartisanfreeRegular':require("../assets/fonts/MaisondeartisanfreeRegular-qZl52.otf")
  })
  return (
   <View >
    <Text style={styles.text}>
       Professional Online
    </Text>
    <Text style={styles.text}>
       Makeup Course
    </Text>
    <View style={styles.text1_cont}>
    <Text style={styles.text1}>
      Certification Programme
    </Text>
    <Text style={styles.rate}>
      Rated  4.8/5
    </Text>
    </View>
    <View>
      <Text style={styles.point}>India’s No.1 Online Makeup Course</Text>
      <Text style={styles.point}>Learn by LIVE Do-it-Together Classe</Text>
      <Text style={styles.point}>Unlimited Practise Session to master skills</Text>
    </View>
   </View>
  )
}
const styles = StyleSheet.create({
    text:{
        color:"#FFFFFF",
        left:10,
        fontFamily:"MaisondeartisanfreeRegular",
        fontSize:20,
        top:5,
        fontWeight:"800"
    },
    text1_cont:{
      top:10,
      left:10,
      height:30,
      width:180,
      backgroundColor:"#383b47",
      borderRadius:10,
      display:"flex",
      flexDirection:"row"
    },
    text1:{
      color:"#FFFFFF",
      left:10,
      fontFamily:"",
      fontSize:14,
      top:5,
  },
  rate:
  {
    color:"#ffd700",
    left:70,
    top:5,
    fontWeight:"bold"
  },
  point:
  {
     color:"#D2D2D2",
     top:15,
     left:20,
     fontSize:14,
     lineHeight:25
  }
});
export default Title