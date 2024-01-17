import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import PropsSiswa from '../props/propssiswa';
import PropsHeader from '../props/propsheader'
import PropsButton from '../props/propsbutton';

const home = ({navigation})=>{
  return(
    <ScrollView style={{backgroundColor:'white'}}>
    <PropsHeader tx='Data Siswa' ct="white" bg='#A2C579' tx1='SMK TELKOM'/>
    <View style={{height:10}}></View>
    <View style={{height:7.5}}></View>
    <PropsSiswa op={() => navigation.navigate('Siswa')} tx='Rafi' ct="black" bg='lightgrey' tx1='541211112'/>
    <PropsSiswa op={() => navigation.navigate('Siswa')} tx='Dama' ct="black" bg='white' tx1='541211113'/>
    <PropsSiswa op={() => navigation.navigate('Siswa')} tx='Bima' ct="black" bg='lightgrey' tx1='541211114'/>
    <PropsSiswa op={() => navigation.navigate('Siswa')} tx='Ruslan' ct="black" bg='white' tx1='541211115'/>
    <PropsSiswa op={() => navigation.navigate('Siswa')} tx='Ardro' ct="black" bg='lightgrey' tx1='541211116'/>
    <PropsSiswa op={() => navigation.navigate('Siswa')} tx='Aldo' ct="black" bg='white' tx1='541211117'/>
    <PropsSiswa op={() => navigation.navigate('Siswa')} tx='Panji' ct="black" bg='lightgrey' tx1='541211118'/>
    </ScrollView>
  )
}

export default home;