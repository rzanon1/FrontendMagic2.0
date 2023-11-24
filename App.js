import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';
const App = () => {
  return(
    <SafeAreaView style={styles.root}>
      <Navigation/>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});


export default App;