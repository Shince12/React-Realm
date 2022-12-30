import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {addData} from '../realm';

const AddData = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddData = () => {
    setLoading(true);
    const id = Math.floor(Math.random() * 10000);
    if (name === '' && author === '' && description === '') {
      alert('Please Fill required fields!');
      setLoading(false);
      return;
    }
    const status = addData(id, name, author, description);

    if (status) {
      alert('Data Added Successfully');
      setLoading(false);
      setName('');
      setAuthor('');
      setDescription('');
    } else {
      alert('Error in add data!');
    }
  };

  return (
    <View
      style={{
        width: '100%',
        height: 'auto',
        padding: 10,
        alignItems: 'center',
        flex: 1,
      }}>
      <View
        style={{
          height: '100%',
          width: '85%',
          paddingBottom: 10,
          alignItems: 'center',
        }}>
        <Text style={styles.headText}>Add Book</Text>
        <TextInput
          placeholder="Name Of Book"
          style={styles.textInput}
          value={name}
          onChangeText={text => setName(text)}
          placeholderTextColor="lightgray"
        />
        <TextInput
          placeholder="Author Name"
          value={author}
          style={styles.textInput}
          onChangeText={text => setAuthor(text)}
          placeholderTextColor="lightgray"
        />
        <TextInput
          placeholder="Description"
          style={styles.textInput}
          value={description}
          onChangeText={text => setDescription(text)}
          placeholderTextColor="lightgray"
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={handleAddData}
          activeOpacity={0.5}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            {loading ? <ActivityIndicator color={'#fff'} /> : 'Add'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddData;

const styles = StyleSheet.create({
  headText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#010101',
  },
  btn: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 5,
    marginTop: 20,
  },
  textInput: {
    width: '100%',
    height: 60,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 5,
    fontSize: 15,
    color:'gray'
  },
});
