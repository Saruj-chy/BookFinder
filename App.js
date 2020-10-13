import React from 'react';

import { StyleSheet, View, Text, Alert } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import Login from './components/login/Login';


const App = () => {
  return (
    <ViewPager
      style={styles.viewPager}
      initialPage={0}
      orientation="horizontal"
      // pageMargin={20}
      scrollEnabled={true}
    // onPageScrollStateChanged={() => Alert.alert("Page change")}
    >
      <View key="1">
        <Login />
      </View>
      <View key="2">
        <Text style={{ flex: 1, backgroundColor: 'red', fontSize: 30, padding: 20 }}>Second page</Text>
      </View>
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});

export default App;