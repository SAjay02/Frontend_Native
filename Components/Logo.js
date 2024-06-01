import { View, Image,StyleSheet } from 'react-native';
const Logo = () => {
  return (
    <View style={styles.container}>
        <Image  style={styles.img_container} source={require('../assets/Airblack.png')}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:
  {
    top:20,
    left:100,
  },
  img_container: {
    width: 220,
    height: 150,
  },
});
export default Logo