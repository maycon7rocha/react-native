import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import Shoes from '../../component/Shoes/index';

export default function Home() {

  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image 
        source={require('../../assets/banner.png')}
        style={style.image}
        />

        <View style={style.textContainer}> 
          <Text style={style.text}>TÊNIS</Text>
          <Text style={[style.text, {color: '#cececf'}]}>·</Text>
          <Text style={[style.text, {color: '#cececf'}]}>MASCULINO</Text>
          <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
            <MaterialIcons 
            name="filter-list"
            size={24}
            color="#000"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.line} />

      <ScrollView>
        <Text style={style.text}>LANÇAMENTOS</Text>
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Shoes img={require('../../assets/1.png')} 
          cost="R$140,90"
          onClick={() => navigation.navigate('Detail')}>
            Nike Air Max Dia
          </Shoes>
          <Shoes img={require('../../assets/2.png')} cost="R$280,90" onClick={() => navigation.navigate('Detail')}>
            Nike Downshifter 10
          </Shoes>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Shoes img={require('../../assets/3.png')} cost="R$560,90" onClick={() => alert('clicou')}>
            Nike Squidward Tentacles
          </Shoes>
          <Shoes img={require('../../assets/4.png')} cost="R$90,90" onClick={() => alert('clicou')}>
            Nike Epic React Flyknit 2
          </Shoes>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Shoes img={require('../../assets/5.png')} cost="R$140,90" onClick={() => alert('clicou')}>
            Nike Joyride Run Flyknit
          </Shoes>
          <Shoes img={require('../../assets/6.png')} cost="R$280,90" onClick={() => alert('clicou')}>
            Nike Air Drop
          </Shoes>
        </View>
      </ScrollView>

    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#fff'
  },
  header: {
    marginBottom: 8
  },
  image:{
    width: '100%'
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%',
  },
  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%',
  },
  line: {
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 2,
  }
})