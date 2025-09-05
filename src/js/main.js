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
    data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
  },
  yAxis: {},
  series: [
    {
      name: 'sales',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
});

document.getElementById("darkModeBtn").addEventListener("click", (event) => {
  const iconEl = event.currentTarget.firstChild;
  console.log(iconEl);
  
  if(iconEl.classList.contains("bi-brightness-high")) {
    iconEl.classList.remove("bi-brightness-high");
    iconEl.classList.add("bi-moon");
    
  } else {
    iconEl.classList.remove("bi-moon");
    iconEl.classList.add("bi-brightness-high");
    
  }
  
});
