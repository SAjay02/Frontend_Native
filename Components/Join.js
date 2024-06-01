import React from 'react'
import { StyleSheet, Text, View,SafeAreaView, Platform } from 'react-native';
const Join = () => {
  return (
     <View style={{backgroundColor:"#ffbc8c",height:300,top:0}}>
        <View style={{top:30}}>
            <Text style={{textAlign:"center",color:"white",fontSize:30,fontWeight:900}}>Why Should You</Text>
            <Text style={{textAlign:"center",color:"white",fontSize:30,fontWeight:900}}>Join Aurblack?</Text>
        </View>
        <View style={{top:80,height:50,width:350,left:40,backgroundColor:"#E84D84",borderRadius:10}}>
            <Text style={{textAlign:"center",top:12,fontSize:15,color:"white"}}>APPLY NOW</Text>
        </View>
     </View>
  )
}

export default Join