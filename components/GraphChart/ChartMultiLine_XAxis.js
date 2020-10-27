import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { LineChart, Grid, YAxis, XAxis } from 'react-native-svg-charts'


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


const ChartMultiLine_XAxis = () => {
  const data1 = [0, 10, 20, 30, 40, 50]
  const data2 = [16, 62, 20, 93, 54]

  const contentInset = { top: 20, bottom: 20 }

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

  // const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

  return (
    <View style={{ height: 200, padding: 20 }}>
      <LineChart
        style={{ flex: 1 }}
        data={data}
        gridMin={0}
        contentInset={{ top: 10, bottom: 10 }}
        svg={{ stroke: 'rgb(134, 65, 244)' }}
      >
        <Grid />
      </LineChart>
      <XAxis
        style={{ marginHorizontal: -10 }}
        data={data1}
        numberOfTicks={10}
        formatLabel={(value, index) => index}
        contentInset={{ left: 10, right: 10 }}
        svg={{ fontSize: 10, fill: 'black' }}
      />
    </View>
  );
};

export default ChartMultiLine_XAxis;