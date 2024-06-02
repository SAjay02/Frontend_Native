import { StyleSheet, Text, View,SafeAreaView, Platform } from 'react-native';
import Logo from './Logo';
const Top = () => {
  return (
    <View style={styles.container}>
        <Logo />
        <Text style={styles.text}>PRESENTS</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:"#edf2ee"
  },
  text:
  {
    top:-35,
    left:180,
    fontFamily:"Inter",
    color:"#f22922",
    fontWeight:"900"
  },
});
export default Top