import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import Card from './Card';
import {getAllData} from '../realm';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native';

const GetData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(getAllData());
  }, []);
  return (
    <SafeAreaView style={{height: 'auto', flex: 1}}>
      <Text style={styles.headText}>Books Details</Text>

      <FlatList
        data={data}
        renderItem={Card ? Card : <ActivityIndicator color={'#000'}/> }
        keyExtractor={item => item.recordID}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 200,
          padding:10,

        }}
      />
    </SafeAreaView>
  );
};

export default GetData;

const styles = StyleSheet.create({
  headText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#010101',
    marginBottom: 10,
  },
});
