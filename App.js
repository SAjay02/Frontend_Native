import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, Platform, ScrollView } from 'react-native';
import FirstSection from './Components/FirstSection';
import Top from './Components/Top';
import Form from './Components/Form';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Top/>
      <FirstSection/>
      <Form/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:Platform.OS==="android"?StatusBar.currentHeight:0
  },
});
