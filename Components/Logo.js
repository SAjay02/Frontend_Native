import { View, Image,StyleSheet,ImageBackground } from 'react-native';
const Logo = () => {
  return (
    <ImageBackground style={{}} blurRadius={3}source={require("../assets/BG.webp")}>    
      <View style={styles.container}>
        <Image  style={styles.img_container} source={require('../assets/Airblack.png')}/>
    </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container:
  {
    top:0,
    left:0,
    // backgroundColor:"red"
  },
  img_container: {
    left:100,
    width: 220,
    height: 150,
  },
});
export default Logo