import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import {
  LineChart,

} from "react-native-chart-kit";

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


const ChartLine = () => {
  const data1 = [0, 10, 20, 30, 40, 50]
  const data2 = [15, 25, 35, 45, 55]


  return (
    <View>
      <Text>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: data1
            }
          ]
        }}
        width={screenWidth} // from react-native
        height={250}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  );
};

export default ChartLine;