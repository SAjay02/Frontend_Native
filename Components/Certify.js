import React from 'react'
import { StyleSheet, Text, View,SafeAreaView, Platform, TextInput, Button,Image } from 'react-native';
const Certify = () => {
  return (
    <View style={{height:480,backgroundColor:"#000000"}}>
        <View style={{top:20}}>
            <Text style={{textAlign:"center",fontSize:30,color:"white"}}>Get Certified From</Text>
            <Text style={{textAlign:"center",fontSize:30,color:"white"}}>India’s Biggest</Text>
            <Text style={{textAlign:"center",fontSize:30,color:"white"}}>Beauty Platform</Text>
        </View>
        <View style={styles.container}>
        <Image  style={styles.img_container} source={require('../assets/Certify.png')}/>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:
    {
      top:60,
      left:50,
    },
    img_container: {
      width: 360,
      height: 250,
    },
  });
export default Certify