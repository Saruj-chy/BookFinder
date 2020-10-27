import React from 'react';
import Login from './components/login/Login';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SliderView from './components/Slider/SliderView';
import Checkboxes from './components/CheckBox/Checkboxes';
import DialogPopUp from './components/Dialog/DialogPopUp';
import ChartLine from './components/GraphChart/ChartLine';
import ChartMultiLine from './components/GraphChart/ChartMultiLine';
import ChartLineSimple from './components/GraphChart/ChartLineSimple';
import ChartProgress from './components/GraphChart/ChartProgress';
import ChartBar from './components/GraphChart/ChartBar';
import ChartStackedBar from './components/GraphChart/ChartStackedBar';
import PieChartScreen from './components/GraphChart/PieChartScreen';
import ChartMultiLine_2 from './components/GraphChart/ChartMultiLine_2';
import ChartMultiLine_XAxis from './components/GraphChart/ChartMultiLine_XAxis';
import ChartMultiLine_Both from './components/GraphChart/ChartMultiLine_Both';
import PagerView from './components/ViewPager/PagerView';

//=========  CheckBox, Login, Picker, Slider, ViewPager
const App = () => {
  return (
    <ScrollView style={styles.scrollView}>
      {/* <Login /> */}
      {/* <SliderView /> */}

      {/* <Checkboxes /> */}
      {/* <DialogPopUp /> */}

      {/* <Text style={{ backgroundColor: 'orange', color: 'white', fontSize: 18, padding: 5, marginVertical: 50 }}>Line Chart </Text>
      <ChartLine />

      <Text style={{ backgroundColor: 'orange', color: 'white', fontSize: 18, padding: 5, marginVertical: 5 }}>Multi Line Chart </Text>
      <ChartMultiLine />

      <ChartMultiLine_2 />

      <ChartMultiLine_Both />

      <ChartMultiLine_XAxis /> */}

      {/* <ChartD3MultiLine /> */}

      {/* <Text style={{ backgroundColor: 'orange', color: 'white', fontSize: 18, padding: 5, marginVertical: 5 }}>Line Chart Simple</Text>

      <ChartLineSimple />

      <Text style={{ backgroundColor: 'orange', color: 'white', fontSize: 18, padding: 5, marginVertical: 5 }}> Chart Progress </Text>

      <ChartProgress />
      <Text style={{ backgroundColor: 'orange', color: 'white', fontSize: 18, padding: 5, marginVertical: 5 }}>Bar Chart</Text>

      <ChartBar />

      <Text style={{ backgroundColor: 'orange', color: 'white', fontSize: 18, padding: 5, marginVertical: 5 }}>StackedBar Chart</Text>

      <ChartStackedBar />

      <Text style={{ backgroundColor: 'orange', color: 'white', fontSize: 18, padding: 5, marginVertical: 5 }}>Pie Chart</Text>
      <PieChartScreen /> */}

      <PagerView />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    marginBottom: 10,
    paddingBottom: 20

  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
