import { chartPortal } from '../styles'

/**
 * Helper function to make a Highcharts options object.
 * @param {Array.<Object>} data - Data to be rendered in chart.
 * @returns {Object}
 */
export function makeOptions (data = []) {
  const dataWithInvisibleObjects = []

  for (const dataItem of data) {
    dataWithInvisibleObjects.push(dataItem)
    dataWithInvisibleObjects.push({ visible: false, y: 2.5 })
  }

  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      height: '100%'
    },
    title: {
      text: `<div id="chart-portal-wrapper" class="${chartPortal}"></div>`,
      useHTML: true,
      floating: true
    },
    tooltip: {
      outside: true,
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        cursor: 'pointer',
        colors: data.map((item) => item.color),
        dataLabels: {
          enabled: false
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Total',
      innerSize: '98%',
      colorByPoint: true,
      borderWidth: 9,
      borderColor: null,
      slicedOffset: 0,
      ignoreHiddenPoint: false,
      data: dataWithInvisibleObjects
    }],
    credits: {
      enabled: false
    }
  }
}
