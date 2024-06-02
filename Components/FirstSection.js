import { StyleSheet, Text, View,SafeAreaView, Platform } from 'react-native';
import Title from './Title';
const FirstSection = () => {
  return (
    <View style={styles.container}>
        <Title/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        top:-18,
        backgroundColor:"#0F1014",
        height:820
    }
});
export default FirstSection