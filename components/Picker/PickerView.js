import React from 'react';
import { Picker } from '@react-native-community/picker';

const PickerView = () => {
  return (
    <Picker
      // selectedValue={this.state.language}
      style={{ height: 50, width: 100 }}
    // onValueChange={(itemValue, itemIndex) =>
    //   this.setState({ language: itemValue })
    // }
    >
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  );
};

export default PickerView;