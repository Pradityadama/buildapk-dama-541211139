import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const PropsButton = (props) => {
  return(
    <TouchableOpacity onPress={props.op}>
      <View style={{backgroundColor:props.bg, marginHorizontal:35, borderRadius:10}}>
        <Text style={{fontWeight:'bold', fontSize:15, alignSelf:'center', marginVertical:10, color:props.ct}}>
          {props.tx}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PropsButton;