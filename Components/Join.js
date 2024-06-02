import React from 'react'
import { StyleSheet, Text, View,SafeAreaView, Platform,ImageBackground } from 'react-native';
const Join = () => {
  return (
    <ImageBackground style={{top:-20}} blurRadius={25}source={require("../assets/bg1.jpg")}>
     <View style={{backgroundColor:"",height:320,top:-20}}>
        <View style={{top:30}}>
            <Text style={{textAlign:"center",color:"white",fontSize:30,fontWeight:900}}>Why Should You</Text>
            <Text style={{textAlign:"center",color:"white",fontSize:30,fontWeight:900}}>Join Airblack?</Text>
        </View>
        <View style={{display:"flex",flexDirection:"row",top:50,justifyContent:"center",gap:100}}>
         
        <Text style={{fontSize:30}}>📽️</Text>
        
        <Text style={{fontSize:30}}>⭐</Text>
        <Text  style={{fontSize:30}}>🙎‍♂️</Text>
        </View>
        <Text style={{fontSize:18,color:"white",top:65,left:30,fontWeight:"700"}}>Do-it-together,{'\n'}live on zoom</Text>
        <Text style={{fontSize:18,color:"white",top:20,left:175,fontWeight:"700"}}>4.8/5{'\n'}Rated Classes</Text>
        <Text style={{fontSize:18,color:"white",top:-27,left:330,fontWeight:"700"}}>35000+{'\n'}Members</Text>
        <View style={{top:0,height:50,width:350,left:40,backgroundColor:"#E84D84",borderRadius:10}}>
            <Text style={{textAlign:"center",top:12,fontSize:15,color:"white"}}>APPLY NOW</Text>
        </View>
     </View>
     </ImageBackground>
  )
}

export default Join