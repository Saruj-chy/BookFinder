import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { Text, View } from 'react-native';


const Checkboxes = () => {

  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <View>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
      />
      <Text>Java</Text>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onCheckColor="red"
        onFillColor="red"
        tintColors="red"
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
      />
      <Text>Android</Text>
    </View>
  );
};

export default Checkboxes;