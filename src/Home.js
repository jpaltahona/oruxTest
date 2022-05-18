import React from 'react'
import {ScrollView,Button,Linking } from 'react-native'
import Instructions from './components/Instructions'
import Galery from './components/Galery'
import HeaderCustom from './components/HeaderCustom'
import ProductData from './components/ProductData'


const Home = ({product}) => {

  const open=()=>{
    let url = 'https://github.com/jpaltahona';
    Linking.openURL(url) 
  }
  
  return (
    <ScrollView>
      <HeaderCustom 
       id={product.id}
       title={product.title}
       description={product.description}
       idealFor={product.idealFor}
      />
      <Galery data={product.gallery}/>
      <ProductData 
        img={product.productShoot}
        features={product.features}
      />
      <Instructions instructions={product.instructions} />
        <Button 
          title='¡LO QUIERO!'
          color="#000"
          onPress={open}
        />
    </ScrollView>
  )
}

export default Home
