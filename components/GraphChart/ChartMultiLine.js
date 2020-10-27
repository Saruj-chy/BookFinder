import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { LineChart, Grid } from 'react-native-svg-charts'


const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
const screenWidth = Dimensions.get("window").width;


const ChartMultiLine = () => {
  const data1 = [0, 10, 20, 30, 40, 50]
  const data2 = [16, 62, 20, 93, 54]

  const data = [
    {
      data: data1,
      svg: { stroke: '#8800cc' },
    },
    {
      data: data2,
      svg: { stroke: 'green' },
    },
  ]

  return (
    <LineChart
      style={{ height: 200, padding: 10 }}
      data={data}
      contentInset={{ top: 20, bottom: 20 }}
    >
      <Grid />
    </LineChart>
  );
};

export default ChartMultiLine;