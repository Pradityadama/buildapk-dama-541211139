import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import PropsButton from '../props/propsbutton';
import PropsInput from '../props/propsinput';

const edit = ({navigation})=>{
  return(
    <ScrollView style={{backgroundColor:'white'}}>
      <View style={{height:120}}></View>
      <Image source={require('../../assets/Telkom.png')} style={{height:100, width:100, alignSelf:'center'}}/>
      <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20}}>Edit Data Siswa</Text>
      <View style={{height:20}}></View>
      <PropsInput ph='NIS'/>
      <View style={{height:25}}></View>
      <PropsInput ph='Nama'/>
      <View style={{height:25}}></View>
      <PropsInput ph='Nomor Handphone'/>
      <View style={{height:25}}></View>
      <PropsInput ph='Alamat'/>
      <View style={{height:25}}></View>
      <PropsButton op={() => navigation.navigate('Home')} tx='Edit' ct="white" bg='#A2C579'/>

    </ScrollView>
  )
}

export default edit;