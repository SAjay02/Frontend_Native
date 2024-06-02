import { StyleSheet, Text, View,SafeAreaView, Platform,Image} from 'react-native';
import {useFonts} from "expo-font"
const Title = () => {
  const [fontsLoaded]=useFonts({
    'MaisondeartisanfreeRegular':require("../assets/fonts/MaisondeartisanfreeRegular-qZl52.otf")
  })
  // ⭐⭐⭐⭐⭐
  return (
   <View >
    <Text style={styles.text}>
       Professional Online
    </Text>
    <Text style={styles.text}>
       Makeup Course
    </Text>
    <View style={styles.text1_cont}>
      <Text style={{fontSize:25,top:2}}>🎖️</Text>
    <Text style={styles.text1}>
      Certification Programme
    </Text>
    <Text style={styles.rate}>
      Ratings   - 
    </Text>
    <View style={styles.container}>
        <Image  style={styles.img_container} source={require('../assets/star.png')}/>
    </View>
{/* ✅☑️✔️ */}
    </View>
    <View>
      <Text style={styles.point}> ✔️  India’s No.1 Online Makeup Course</Text>
      <Text style={styles.point}> ✔️  Learn by LIVE Do-it-Together Classe</Text>
      <Text style={styles.point}> ✔️  Unlimited Practise Session to master skills</Text>
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
        top:15,
        fontWeight:"800"
    },
    text1_cont:{
      top:30,
      left:10,
      height:40,
      width:200,
      backgroundColor:"#383b47",
      borderRadius:10,
      display:"flex",
      flexDirection:"row"
    },
    text1:{
      color:"#FFFFFF",
      left:-2,
      fontFamily:"",
      fontSize:15,
      top:10,
  },
  rate:
  {
    color:"#ffd700",
    left:32,
    top:10,
    fontWeight:"bold",
    fontSize:16
  },
  point:
  {
     color:"#D2D2D2",
     top:45,
     left:20,
     fontSize:17,
     lineHeight:25
  },
  container:
  {
    top:8,
    left:38,
  },
  img_container: {
    width: 100,
    height: 30,
  },
});
export default Title