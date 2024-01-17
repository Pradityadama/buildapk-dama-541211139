import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import PropsHeader from '../props/propsheader'
import PropsSiswa from '../props/propssiswa';
import PropsButton from '../props/propsbutton';

const Siswa = ({navigation})=>{
  return(
    <ScrollView style={{backgroundColor:'white'}}>
    <PropsHeader tx='Data Siswa' ct="white" bg='#A2C579' tx1='SMK Telkom'/>
    <View style={{height:65}}></View>
    <PropsSiswa op={() => navigation.navigate('Siswa')} tx='NIS' ct="black" bg='lightgrey' tx1='541211154'/>
    <View style={{height:10}}></View>
    <PropsSiswa op={() => navigation.navigate('Siswa')} tx='Nama' ct="black" bg='white' tx1='Dama Hutama'/>
    <View style={{height:10}}></View>
    <PropsSiswa op={() => navigation.navigate('Siswa')} tx='Nomor Handphone' ct="black" bg='lightgrey' tx1='08123456789'/>
    <View style={{height:10}}></View>
    <PropsSiswa op={() => navigation.navigate('Siswa')} tx='Alamat' ct="black" bg='white' tx1='Sikanco'/>
    <View style={{height:40}}></View>
    <PropsButton op={() => navigation.navigate('Edit')} tx='Edit Data Siswa' ct="white" bg='#A2C579'/>
    </ScrollView>
  )
}

export default Siswa;