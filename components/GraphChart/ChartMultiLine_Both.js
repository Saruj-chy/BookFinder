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


const ChartMultiLine_Both = () => {
  const data1 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
  const data2 = [8, 15, 18, 25, 34, 38, 55, 64, 77, 88]
  const data3 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

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
    {
      data: data3,
      svg: { stroke: 'blue' },
    },
  ]

  // const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

  return (
    <View style={{ height: 200, padding: 20, marginBottom: 400 }}>
      <View style={{ height: 300, flexDirection: 'row', textAlignVertical: 50, margin: 20, marginTop: 100, marginBottom: 100 }}>
        <YAxis
          data={data1}
          contentInset={contentInset}
          svg={{
            fill: 'grey',
            fontSize: 10,
          }}
          numberOfTicks={10}
          formatLabel={(value) => `${value}ºC`}
        />
        <LineChart
          style={{ flex: 1, marginLeft: 16 }}
          data={data}
          svg={{ stroke: 'rgb(134, 65, 244)' }}
          contentInset={contentInset}
        >
          <Grid />
        </LineChart>
      </View>

      <XAxis
        style={{ marginHorizontal: -10 }}
        data={data2}
        numberOfTicks={10}
        formatLabel={(value, index) => index}
        contentInset={{ left: 10, right: 10 }}
        svg={{ fontSize: 10, fill: 'black' }}
      />
    </View>

  );
};

export default ChartMultiLine_Both;