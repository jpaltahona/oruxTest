import React from 'react'
import { StyleSheet, ImageBackground, View, FlatList, Image} from 'react-native'

const Galery = ({data}) => {

    const renderItem = ({ item }) => {
        console.log(item)
        return  <Image 
            source={{uri: item}} 
            resizeMode="stretch"
            style={styles.cardOne}/>    
       
    };
    
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                horizontal={true}
            />
        </View>
    )
}

export default Galery

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        
    },
    cardOne: {
        height: 230,
        width: 170,
        margin: 10
    }
})