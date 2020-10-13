import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import { Text, View } from 'react-native';

const SliderView = () => {
  const [values, setValues] = useState(30);
  const handleChange = (data) => {
    const value = Math.floor(data);
    setValues(value)
  }
  return (
    <View>
      <Slider
        style={{ height: 100, marginVertical: 100 }}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="red"
        maximumTrackTintColor="blue"
        disabled={false}
        onValueChange={(data) => handleChange(data)}
        step={5}
        value={values}
        thumbTintColor='black'
      />

      <Text style={{ marginHorizontal: 100, fontSize: 40 }}>{values}</Text>


    </View>
  );
};

export default SliderView;