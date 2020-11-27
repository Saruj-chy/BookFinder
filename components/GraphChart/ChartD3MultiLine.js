import React from 'react';
import { View } from 'react-native';
import { MultiLineChart } from 'react-native-d3multiline-chart';

const ChartD3MultiLine = () => {

  var data = [[{
    "y": "202",
    "x": 2000
  }, {
    "y": "215",
    "x": 2001
  }, {
    "y": "179",
    "x": 2002
  }, {
    "y": "199",
    "x": 2003
  }, {
    "y": "134",
    "x": 2003
  }, {
    "y": "176",
    "x": 2010
  }],
  [{
    "y": "152",
    "x": 2000
  }, {
    "y": "189",
    "x": 2002
  }, {
    "y": "179",
    "x": 2004
  }, {
    "y": "199",
    "x": 2006
  }, {
    "y": "134",
    "x": 2008
  }, {
    "y": "176",
    "x": 2010
  }]
  ]
  //default data is available 
  let leftAxisData = [
    134, 144, 154, 164, 174, 184, 194, 204, 215
  ]
  //default data is available 
  let bottomAxisData = [
    2000, 2002, 2004, 2006, 2008, 2010
  ]
  let legendColor = ['#00b7d4', 'red']
  let legendText = ['sales', 'year']
  let minX = 2000, maxX = 2010
  let minY = 134, maxY = 215

  //since there are only two lines
  var Color = ['#00b7d4', 'red']

  return (
    <View>
      <MultiLineChart data={data} />
    </View>
  );
};

export default ChartD3MultiLine;