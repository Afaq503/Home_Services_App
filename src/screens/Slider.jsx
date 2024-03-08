import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../utils/GlobalApi'
import Heading from '../components/Heading';

const Slider = () => {
    const [slider, setSilder] = useState([]);

    useEffect(() => {
        getSilders()
    },[])

    const getSilders = async() => {
        GlobalApi.getSlider().then(res => {
            // const apidata = JSON.stringify(res.sliders)
            // console.log(`this is my api data:  ${apidata}`);
            // console.log(`this is my api data:  ${res?.sliders}`);
            // setSilder(apidata)
            setSilder(res?.sliders)
        })
    }

  return (
    <View >
      <Heading text={"Offers For You"}/>
      <FlatList
        data={slider}
        horizontal = {true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
            <View style={{marginRight:20}}>
                <Image
                source={{ uri:item?.image?.url }}
                style={styles.sliderImage}
                />
            </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    sliderImage:{
        width:280,
        height:150,
        borderRadius:20,
        objectFit:'contain'
    }
})

export default Slider