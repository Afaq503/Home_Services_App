import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

import colors from '../utils/colors'

const BusinessListItem = ({business}) => {
  return (
    <View style={styles.container}>
        <Image
        source={{uri:business?.images[0]?.url}}
        style={styles.image}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor: colors.WHITE,
        borderRadius:15,
        marginBottom:15
    },
    image:{
        width:100,
        height:100,
        borderRadius:15
    }
})

export default BusinessListItem