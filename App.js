import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AddData from './src/AddData';
import Delete from './src/Delete';
import GetData from './src/GetData';
import {KeyboardAvoidingView} from 'react-native';
import {SafeAreaView} from 'react-native';

const App = () => {
  const [menu, setMenu] = useState('add');

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <SafeAreaView style={{flex: 1}}>
        <Text style={styles.headerText}>Book Store</Text>
        <LinearGradient
          colors={['white', 'white']}
          style={styles.linearGradient}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.5}
              onPress={() => setMenu('add')}>
              <Text style={styles.text}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.5}
              onPress={() => setMenu('get')}>
              <Text style={styles.text}>Get</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.5}
              onPress={() => setMenu('delete')}>
              <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        <View style={styles.result_container}>
          {(menu === 'add' && <AddData />) ||
            (menu === 'get' && <GetData />) ||
            (menu === 'delete' && <Delete />)}
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  linearGradient: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    borderRadius: 80,
    marginTop: 10,
    padding: 10,
  },
  headerText: {
    fontSize: 30,
    padding: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },
  buttonContainer: {
    width: '100%',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-evenly'
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  text: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'semibold',
  },
  result_container: {
    width: '100%',
    height: '100%',
    marginTop: 20,
  },
});