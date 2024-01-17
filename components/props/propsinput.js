import React from 'react';
import {TextInput} from 'react-native';

const PropsInput = (props) => {
  return(
    <TextInput
        placeholder={props.ph} style={{borderWidth:1, borderColor:'grey', borderRadius:10, height:35, marginHorizontal:35, padding:10}}
      />
  )
}

export default PropsInput;