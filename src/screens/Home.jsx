import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Slider from './Slider'
import Categories from '../components/Categories'
import BusinessList from './BusinessList'

const Home = () => {
  return (
    <View>
      <Header/>
      <View style={{padding:20}}>
        {/* Silder */}
      <Slider/>
      {/* Categories */}
      <Categories/>
      {/* BusinessList */}
      <BusinessList/>

      </View>
    </View>
  )
}

export default Home