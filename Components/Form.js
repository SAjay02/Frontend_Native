import React from 'react'
import { StyleSheet, Text, View,SafeAreaView, Platform, TextInput, Button } from 'react-native';
const Form = () => {
  return (
    <View style={styles.container}>
     <View style={styles.form_top}>
        <Text style={{textAlign:'center',top:5,color:"white",fontSize:15}}>
        FILL THE FORM BELOW TO ENQUIRE
        </Text>
     </View>
     <View>
        <Text style={{color:"black",left:20,top:10}}>* Enter Your Name</Text>
        <View style={styles.text_cont}><TextInput style={{top:4,left:10}}>Eg: Ajay</TextInput></View>
        <Text style={{color:"black",left:20,top:25}}>* Enter Your WhatsApp Number</Text>
        <View style={{display:"flex",flexDirection:"row"}}>
            <View style={{width:35,left:25, borderRadius:10,top:1}}>
            <Text style={{height:40,top:30, backgroundColor:"#e3e2e1",borderRadius:10}}>+91</Text>
            </View>
        <View style={styles.text_num}>
            <TextInput style={{top:4,left:10}}>Eg: 000000</TextInput>
            </View>
            </View>
            <Text style={{color:"black",left:20,top:35}}>* Select Your Profession</Text>
        <View style={styles.prof_cont}><TextInput style={{top:4,left:10}}>Choose the most relevent option</TextInput></View>
        <View style={{left:340,top:-6}}><Text style={{position:"absolute",fontSize:25,}}>↓</Text></View>
        <Text style={{color:"black",left:20,top:45}}>* Select Your goal</Text>
        <View style={styles.goal_cont}><TextInput style={{top:4,left:10}}>Choose the most relevent option</TextInput></View>
        <View style={{left:340,top:3}}><Text style={{position:"absolute",fontSize:25,}}>↓</Text></View>
        <Text style={{color:"black",left:20,top:55}}>* Select Your city</Text>
        <View style={styles.city_cont}><TextInput style={{top:4,left:10}}>Choose the most relevent option</TextInput></View>
        <View style={{left:340,top:14}}><Text style={{position:"absolute",fontSize:25}}>↓</Text></View>
        <View style={{top:80,height:40,width:350,left:20,backgroundColor:"#E84D84",borderRadius:10}}>
            <Text style={{textAlign:"center",top:10,fontSize:15,color:"white"}}>SUBMIT</Text>
        </View>
     </View>
    </View>
  )
}
// ↓
const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        height:470,
        left:18,
        width:400,
        top:370,
        position:"absolute",  
        borderTopStartRadius:15,
        borderTopRightRadius:15,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15
    },
    form_top:{
        height:30,
        width:400,
        backgroundColor:"#E84D84",
        color:"white",
        borderTopStartRadius:15,
        borderTopRightRadius:15
    },
    text_cont:{
        top:15,
        height:40,
        width:350,
        left:20,
        border:4,
        borderColor:"black",
        borderRadius:10,
        backgroundColor:"#e3e2e1"
    },
    text_num:{
        top:30,
        height:40,
        width:290,
        left:45,
        border:4,
        borderColor:"black",
        borderRadius:10,
        backgroundColor:"#e3e2e1"
    },
    prof_cont:{
        top:40,
        height:40,
        width:350,
        left:20,
        border:4,
        borderColor:"black",
        borderRadius:10,
        backgroundColor:"#e3e2e1"
    },
    goal_cont:{
        top:50,
        height:40,
        width:350,
        left:20,
        border:4,
        borderColor:"black",
        borderRadius:10,
        backgroundColor:"#e3e2e1"
    },
    city_cont:{
        top:60,
        height:40,
        width:350,
        left:20,
        border:4,
        borderColor:"black",
        borderRadius:10,
        backgroundColor:"#e3e2e1"
    },
});
export default Form