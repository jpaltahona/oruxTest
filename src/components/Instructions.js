import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import gymIcon from '../assets/icons/gym.png'

const Instructions = ({instructions}) => {

  const renderItem = ({ item }) => ( 
      <View style={styles.card}>
        <Image source={ gymIcon } resizeMode="stretch" style={styles.itemImg}/>
        <Text style={styles.itemDescription}>{item.description.es}</Text>
      </View>
    );

  return (
    <View>
        <FlatList
          data={instructions}
          renderItem={renderItem}
          keyExtractor={item => item.es}
        />
    </View>
  )
}

export default Instructions

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        padding: 16
    },
    itemImg: {
      width: 80,
      height: 80,
      marginRight: 16
    },
    itemDescription: {
      flex: 2,
      fontSize: 16
    }
})