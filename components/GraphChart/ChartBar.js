import React from 'react';

import { Text, View, Dimensions } from 'react-native';

import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";


const screenWidth = Dimensions.get("window").width;


const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43]
    }
  ]
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

const ChartBar = () => {
  return (
    <BarChart
      style={{
        marginVertical: 50,
        borderRadius: 16
      }}
      data={data}
      width={screenWidth}
      height={220}
      yAxisLabel="$"
      chartConfig={chartConfig}
      verticalLabelRotation={30}  //data rotate
      showBarTops={true}
      showValuesOnTopOfBars={true}
    // withInnerLines={false}
    />
  );
};

export default ChartBar;