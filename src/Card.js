import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

const Card = ({item}) => {
  return (
    <View style={styles.cardContainer}>
      <Text
        style={{
          fontSize: 15,
          color:'#010101',
          fontWeight:"300"
        }}>
        Record ID : {item.recordID}
      </Text>
      <View
        style={{
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color:'#010101'
            
          }}>
         Name : {item.name}
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 18,
            color:'#010101'
          }}>
          Author : {item.author}
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 17,
            lineHeight: 25,
            color:'#010101'
          }}>
          Deatils : {item.details}
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 40,
          justifyContent: 'flex-end',
          padding: 10,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Image source={require('../assets/heart.png')} resizeMode="cover" />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    minHeight: 90,
    height: 'auto',
    maxHeight: 200,
    borderRadius: 15,
    backgroundColor: '#fff',
    marginTop: 5,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'space-around',
  },
});
