import React from 'react'
import { StyleSheet, Text, View,SafeAreaView, Platform, TextInput, Button,Image,ImageBackground } from 'react-native';
const Contact = () => {
  return (
    <ImageBackground style={{top:-20}} blurRadius={18}source={require("../assets/bg1.jpg")}>
    <View style={{height:350,backgroundColor:"",top:-15}}>
        <View style={{top:30}}>
            <Text style={{textAlign:"center",fontSize:30,color:"white",fontWeight:""}}>Join our growing</Text>
            <Text style={{textAlign:"center",fontSize:30,color:"white",fontWeight:""}}>community of</Text>
            <Text style={{textAlign:"center",fontSize:30,color:"white",fontWeight:""}}>35,000+ alumni</Text>
        </View>
        <View style={{top:80,height:50,width:350,left:40,backgroundColor:"#E84D84",borderRadius:10}}>
            <Text style={{textAlign:"center",top:12,fontSize:15,color:"white"}}>APPLY NOW</Text>
        </View>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"center",gap:30,top:105}}>
        <Image style={{height:50,width:50}} source={require('../assets/insta.png')}/>
        <Image style={{height:50,width:50}} source={require('../assets/facebook.png')}/>
        <Image style={{height:50,width:50}} source={require('../assets/linked.png')}/>
        <Image style={{height:50,width:50}} source={require('../assets/twitter.png')}/>
        </View>
    </View>
    </ImageBackground>
  )
}

export default Contact