import React from 'react';
import { Text, View, Dimensions } from 'react-native';

import {
  LineChart,

} from "react-native-chart-kit";


const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [10, 45, 28, 80, 100, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 4 // optional
    }
  ],
  legend: ["Rainy Days"] // optional
};


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


const ChartLineSimple = () => {
  return (
    <LineChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      fromZero={true}
      withDots={true}
      withShadow={true}
      withInnerLines={true}
      withOuterLines={true}
      withVerticalLabels={true}
      withHorizontalLabels={true}
      yAxisLabel="$"
      yAxisSuffix="K"
      // xAxisLabel="->"
      yAxisInterval="20"
      segments={10}
    // bezier                 //Add this prop to make the line chart smooth and curvy
    />
  );
};

export default ChartLineSimple;