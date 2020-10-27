import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";


const screenWidth = Dimensions.get("window").width;


const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const data = {
  labels: ["Test1", "Test2"],
  legend: ["L1", "L2", "L3"],
  data: [
    [60, 60, 60],
    [30, 30, 60]
  ],
  barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
};

const ChartStackedBar = () => {
  return (
    <StackedBarChart
      style={{ backgroundColor: 'red' }}
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}

    />
  );
};

export default ChartStackedBar;