import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, Platform, ScrollView } from 'react-native';
import FirstSection from './Components/FirstSection';
import Top from './Components/Top';
import Form from './Components/Form';
import Join from './Components/Join';
import Certify from './Components/Certify';
import Contact from './Components/Contact';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Top/>
      <FirstSection/>
      <Form/>
      <Join/>
      <Certify/>
      <Contact/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'reed',
    paddingTop:Platform.OS==="android"?StatusBar.currentHeight:0
  },
});
