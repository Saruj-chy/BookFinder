import React, { useState } from 'react';
import { Picker } from '@react-native-community/picker';

const App = () => {

  const [language, setLanguage] = useState("");
  return (
    <Picker
      selectedValue={language}
      style={{ backgroundColor: 'orange', color: 'green' }}
      enabled={true}
      mode="dropdown" //dialog, dropdown
      // prompt={language} //no change show
      // itemStyle={{ backgroundColor: 'orange', color: 'green' }}  //no change show
      onValueChange={(itemValue, itemIndex) =>
        setLanguage(itemValue)
      }
    >
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="JavaScript" />
      <Picker.Item label="C" value="C" />
      <Picker.Item label="C++" value="C++" />
      <Picker.Item label="Python" value="Python" />
      <Picker.Item label="Ruby" value="Ruby" />
    </Picker>
  );
};

export default App;