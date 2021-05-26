const width = '100%';
const height = '350px';

const BarChart = {
  title: 'BarChart',
  key: 'BarChart',
  chartType: 'BarChart',
  width,
  height,
  data: [
    [
      'Views',
      'Views',
      {
        role: 'style',
      },
    ],
    ['MolternCoreMusic', 10000, 'fill-color: #48A6F2; fill-opacity: 0.4'],
    ['RetroOntario', 21500, 'fill-color: #f64744; fill-opacity: 0.4'],
    ['MUCH', 56598, 'fill-color: #ffbf00; fill-opacity: 0.4'],
    ['MuchMusic Clips', 85256, 'fill-color: #511E78; fill-opacity: 0.4'],
  ],
  options: {
    title: '23,435,345 Views across 59 uploader channels',
    titleTextStyle: {
      color: '#788195',
    },
    bar: {
      groupWidth: '95%',
    },
    legend: {
      position: 'none',
    },
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true,
    },
    hAxis: {
      textStyle: {
        color: '#788195',
      },
    },
    vAxis: {
      textStyle: {
        color: '#788195',
      },
    },
    tooltip: {
      textStyle: {
        color: '#788195',
      },
    },
  },
  chartEvents: [
    {
      eventName: 'onmouseover',
    },
  ],
};

/* * * * * * * * * * * * * * * * * * * *
              Donut Charts
* * * * * * * * * * * * * * * * * * * */

const DonutChart = {
  title: '',
  key: 'DonutChart',
  chartType: 'PieChart',
  width,
  height,
  data: [
    ['Task', 'Hours per Day'],
    ['Intimate & interactive', 458],
    ['Much Music Video Awards', 83],
    ['Big Ticket', 83],
    ['The New Music', 83],
    ['Live@Much', 292],
  ],
  options: {
    titleTextStyle: {
      color: '#788195',
    },
    legend: {
      textStyle: {
        color: '#788195',
      },
    },
    pieHole: 0.4,
    pieSliceTextStyle: {
      color: '#ffffff',
    },
    is3D: true,
    colors: ['#9678AE', '#F99FB4', '#C8E4FB', '#01C0C8', '#ffbf00'],
    tooltip: {
      text: 'percentage',
      textStyle: {
        color: '#788195',
      },
    },
  },
};

export { BarChart, DonutChart };
