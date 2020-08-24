import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Shoes(props) {

  function filterDesc(desc) {  
    if(desc.length < 20) {
      return desc;
    }

    return `${desc.substring(0, 18)}...`;
  }
  return(
    <TouchableOpacity style={style.container} onPress={props.onClick}>
      <Image
      source={props.img}
      style={style.shoesImg}
      />
      <Text style={style.shoesText}>
        {filterDesc(props.children)}
      </Text>
      <View opacity={0.4}>
        <Text style={style.shoesText}>
          {props.cost}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container:{
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  shoesImg:{
    width: 175,
    height: 175
  },
  shoesText:{
    fontSize: 16,
  }
})