/**
 * Helper function to make a Highcharts options object.
 * @param {Array.<Object>} data - Data to be rendered in chart.
 * @returns {Object}
 */
export function makeOptions (data = []) {
  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'line',
      height: '468px'
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    xAxis: {
      labels: {
        format: 'Mês {value}'
      }
    },
    yAxis: {
      labels: {
        enabled: false
      },
      title: {
        text: ''
      }
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      labelFormat: 'Valor {name}'
    },
    plotOptions: {
      series: {
        showInNavigator: true,
        pointStart: 1,
        states: {
          hover: {
            halo: null
          }
        },
        marker: {
          enabled: false,
          symbol: 'circle',
          fillColor: '#ffffff',
          lineWidth: 1,
          lineColor: null
        }
      }
    },
    tooltip: {
      headerFormat: '<strong>Mês:</strong> {point.key} <br />',
      pointFormatter: function () {
        const formattedCurrency = new Intl.NumberFormat(
          'pt-br',
          { style: 'currency', currency: 'BRL' }
        ).format(this.y)

        return `<strong>${this.series.name}:</strong>: ${formattedCurrency}<br/>`
      },
      split: false,
      shared: true
    },
    series: data
  }
}
