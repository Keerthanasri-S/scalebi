// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';

import * as echarts from 'echarts';

// Create the echarts instance
var myChart = echarts.init(document.getElementById('barChart'));

// Draw the chart
myChart.setOption({
  tooltip: {},
  xAxis: {
    data: ['> 30 days', '> 7 days && <= 30 days ', '<= 7 days']
  },
  yAxis: {},
  series: [
    {
      name: 'sales',
      type: 'bar',
      data: [5, 20, 36]
    }
  ]
});

document.getElementById("darkModeBtn").addEventListener("click", (event) => {
  if(event.currentTarget.innerHTML.includes("bi-brightness-high")) {
    event.currentTarget.innerHTML = `<i class="bi bi-moon"></i>`;
  } else {
    event.currentTarget.innerHTML = `<i class="bi bi-brightness-high"></i>`;
  }
});
