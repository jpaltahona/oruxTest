import { StyleSheet, Text, View, Button , Alert, FlatList} from 'react-native'
import React from 'react'

export default function HeaderCustom({id, title, description, idealFor }) {

  const renderItem = ({ item }) => <Text style={styles.item}>{item.es}</Text> ;

  return (
    <View style={styles.container}>
      { typeof title?.es === 'string' && <Text style={styles.title}>{title.es}</Text> }
      {
        typeof description?.es === 'string' && <Text style={styles.description}>{description.es}</Text>
      }
      <View style={styles.itemContain}>
        <Text style={styles.subTitle}>Ideal para:</Text>
        <FlatList
          data={idealFor}
          renderItem={renderItem}
          keyExtractor={item => item.es}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16
  },
  description: {
    marginTop: 16,
    fontSize: 16,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 16
  },
  itemContain: {
    padding: 26
  },
  item: {
    marginBottom: 8,
    fontSize: 16
  }
})