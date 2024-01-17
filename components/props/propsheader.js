import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

const PropsHeader = (props) => {
  return(
      <View style={{backgroundColor:props.bg, borderBottomLeftRadius:10,borderBottomRightRadius:10,flexDirection:'row', padding:20, justifyContent:'center', marginBottom:10}}>
        <Image
        source={require('../../assets/Telkom.png')} style={{height:80, width:80, alignSelf:'center', marginRight:20}}/>
        <View>
        <Text style={{fontWeight:'bold', fontSize:25, marginVertical:10,marginHorizontal:10, color:props.ct}}>
          {props.tx}
        </Text>
        <Text style={{fontSize:20, marginBottom:10,marginHorizontal:10, color:props.ct}}>
          {props.tx1}
        </Text>
        </View>
      </View>
  )
}

export default PropsHeader;