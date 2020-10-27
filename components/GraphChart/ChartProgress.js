import React from 'react';
import { Text, View, Dimensions } from 'react-native';

import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";


const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ["Swim", "Bike", "Run", "Metro"], // optional
  data: [0.2, 0.4, 0.6, 0.8]
};


const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const ChartProgress = () => {
  return (
    <ProgressChart
      data={data}
      width={screenWidth}
      height={220}
      strokeWidth={12}
      radius={40}
      chartConfig={chartConfig}
      hideLegend={false}
    />
  );
};

export default ChartProgress;