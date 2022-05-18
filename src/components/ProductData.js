import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'

const ProductData = ({img, features}) => {
    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.containItem}>
                <Text style={styles.itemNumer}>{index + 1}</Text>
                <Text style={styles.itemText}>{item.es}</Text>
            </View>
        )
    };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageProduct}
        source={{uri: img}}
        resizeMode="contain"
      />
      <FlatList
          data={features}
          renderItem={renderItem}
          keyExtractor={item => item.es}
        />
    </View>
  )
}

export default ProductData

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40
    },
    imageProduct: {
        width: 300,
        height: 300,
        marginBottom: 30
    },
    containItem: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    itemNumer: {
        color: '#fff',
        backgroundColor: '#000',
        fontSize: 16,
        width: 25,
        height: 25,
        textAlign: 'center',
        borderRadius: 20,
        marginRight: 8
    },
    itemText: {
        fontSize: 18,
        fontWeight: '600'
    }
})