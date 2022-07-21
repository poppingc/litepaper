import * as echarts from 'echarts';
import * as React from 'react';
import { useWindowSize } from 'react-use';

import chartData from '@/data/chart-distribution.json';

const option = {
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      return `${params.data.value} (${params.percent}%)`;
    },
  },
  color: [
    '#9dd3e8',
    '#FFF',
    '#fd7f6f',
    '#7eb0d5',
    '#b2e061',
    '#bd7ebe',
    '#ffb55a',
    '#ffee65',
    '#beb9db',
    '#fdcce5',
    '#8bd3c7',
  ],
  /**
   * @see https://github.com/apache/echarts/blob/master/src/component/legend/LegendModel.ts
   */
  legend: {
    orient: 'vertical',
    top: 'center',
    left: '60%',
    /**
     * Padding between legend item and border.
     * Support to be a single number or an array.
     * @default 5
     */
    padding: 0,
    /**
     * Gap between each legend item.
     * @default 10
     */
    itemGap: 20,
    /**
     * Width of legend symbol
     */
    itemWidth: 20,
    /**
     * Height of legend symbol
     */
    itemHeight: 10,
    /**
     * Border radius of background rect
     * @default 0
     */
    borderRadius: 0,
    textStyle: {
      fontSize: '14',
      color: '#fff',
    },
    inactiveColor: '#f0f0f0',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '80%'],
      center: ['30%', '50%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center',
      },
      labelLine: {
        show: false,
      },
      data: chartData.map((item) => ({
        value: item['Token Amount'],
        name: item['Allocation'],
      })),
    },
  ],
};

const mobileOptions = {
  ...option,
  legend: {
    ...option.legend,
    orient: 'horizontal',
    left: 'center',
    top: 'bottom',
  },
  series: [
    {
      ...option.series[0],
      radius: ['25%', '60%'],
      center: ['50%', '30%'],
    },
  ],
};

export default function ChartDistribution() {
  const chart = React.useRef(null);
  const chartMobile = React.useRef(null);
  const myChart = React.useRef(null);
  const myChartMobile = React.useRef(null);

  React.useEffect(() => {
    myChart.current = echarts.init(chart.current, null, {});
    myChartMobile.current = echarts.init(chartMobile.current, null, {});
    option && myChart.current.setOption(option);
    option && myChartMobile.current.setOption(mobileOptions);
  }, []);

  const { width, height } = useWindowSize();
  React.useEffect(() => {
    myChart && myChart.current.resize();
    myChartMobile && myChartMobile.current.resize();
  }, [width, height]);

  return (
    <div className='relative pt-9 lg:pt-0'>
      <p className='absolute left-0 top-[55%] mt-4 text-center text-base font-medium text-white xs:top-[60%] sm:top-0 sm:left-[60%] md:text-lg lg:top-16'>
        Total Supply : 450,000,000
      </p>
      <div
        className='hidden h-96 w-full sm:block lg:h-[600px]'
        ref={chart}
      ></div>
      <div
        className='h-[570px] w-full xs:h-[570px] sm:hidden'
        ref={chartMobile}
      ></div>
    </div>
  );
}
