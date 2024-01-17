import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import PropsButton from '../props/propsbutton';
import PropsInput from '../props/propsinput';

const login = ({navigation})=>{
  return(
    <ScrollView style={{backgroundColor:'white'}}>
      <View style={{height:150}}></View>
      <Image source={require('../../assets/Telkom.png')} style={{height:100, width:100, alignSelf:'center'}}/>
      <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20}}>Login</Text>
      <View style={{height:50}}></View>
      <PropsInput ph='Nomor Handphone'/>
      <View style={{height:25}}></View>
      <PropsInput ph='Password'/>
      <View style={{height:50}}></View>
      <PropsButton op={() => navigation.navigate('Home')} tx='Login' ct="white" bg='#A2C579'/>
      <View style={{height:10}}></View>
      <Text style={{textAlign:'center', fontSize:10}}>OR</Text>
      <PropsButton op={() => navigation.navigate('Register')} tx='Register' ct="#A2C579" bg='white'/>

    </ScrollView>
  )
}

export default login;