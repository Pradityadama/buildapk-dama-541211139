import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const PropsSiswa = (props) => {
  return(
    <TouchableOpacity onPress={props.op}>
      <View style={{backgroundColor:props.bg, marginHorizontal:10, marginVertical:2.5,borderRadius:10}}>
        <Text style={{fontWeight:'bold', fontSize:15, marginVertical:10,marginHorizontal:10, color:props.ct}}>
          {props.tx}
        </Text>
        <Text style={{fontSize:15, marginBottom:10,marginHorizontal:10, color:props.ct}}>
          {props.tx1}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PropsSiswa;