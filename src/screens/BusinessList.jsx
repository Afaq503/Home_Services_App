import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../utils/GlobalApi';
import Heading from '../components/Heading';
import BusinessListItemSamll from '../components/BusinessListItemSamll';

const BusinessList = () => {
    const [businessList, setBusinessList] = useState([]);

    useEffect(() => {
        getBusinessList()
    },[])

    const getBusinessList = async() => {
        GlobalApi.getBusinessList().then(res => {
            setBusinessList(res?.businessLists)
        })
    }
  
    return (
        <View>
            <Heading text={"Business List"} isView={true}/>
            <FlatList
                data={businessList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <View style={{marginRight:10}}>
                        <BusinessListItemSamll business={item}/>
                    </View>
                )}
            />
        </View>
    )
}

export default BusinessList
