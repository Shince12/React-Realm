import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import {deleteAllData} from '../realm';

const Delete = () => {
  const [loader, setLoader] = useState(false);
  const handelDelete = () => {
    setLoader(true);
    const isDeleted = deleteAllData();
    if (isDeleted) {
      setLoader(false);
    } else {
      alert('Error in deleting data !');
    }
  };

  return (
    <View
      style={{
        width: '100%',
        padding: 10,
      }}>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 60,
          backgroundColor: 'blue',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={handelDelete}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: '#fff',
          }}>
          {loader ? <ActivityIndicator color={'#fff'} /> : 'Delete All '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Delete;

const styles = StyleSheet.create({});
