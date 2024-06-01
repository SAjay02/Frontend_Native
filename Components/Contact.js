import React from 'react'
import { StyleSheet, Text, View,SafeAreaView, Platform, TextInput, Button,Image } from 'react-native';
const Contact = () => {
  return (
    <View style={{height:400,backgroundColor:"#ffbc8c"}}>
        <View style={{top:30}}>
            <Text style={{textAlign:"center",fontSize:30}}>Join our growing</Text>
            <Text style={{textAlign:"center",fontSize:30}}>community of</Text>
            <Text style={{textAlign:"center",fontSize:30}}>35,000+ alumni</Text>
        </View>
        <View style={{top:80,height:50,width:350,left:40,backgroundColor:"#E84D84",borderRadius:10}}>
            <Text style={{textAlign:"center",top:12,fontSize:15,color:"white"}}>APPLY NOW</Text>
        </View>
    </View>
  )
}

export default Contact