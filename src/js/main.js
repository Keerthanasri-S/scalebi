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

// ...existing code...

// Set initial theme and icon on page load
document.addEventListener("DOMContentLoaded", () => {
  const htmlEl = document.documentElement;
  const darkModeBtn = document.getElementById("darkModeBtn");
  const iconEl = darkModeBtn.querySelector("i");

  // Set default theme to light if not set
  if (!htmlEl.getAttribute("data-bs-theme")) {
    htmlEl.setAttribute("data-bs-theme", "light");
    iconEl.classList.remove("bi-moon");
    iconEl.classList.add("bi-brightness-high");
  } else if (htmlEl.getAttribute("data-bs-theme") === "dark") {
    iconEl.classList.remove("bi-brightness-high");
    iconEl.classList.add("bi-moon");
  } else {
    iconEl.classList.remove("bi-moon");
    iconEl.classList.add("bi-brightness-high");
  }

  // Toggle theme and icon on button click
  darkModeBtn.addEventListener("click", (event) => {
    const isLight = htmlEl.getAttribute("data-bs-theme") === "light";
    if (isLight) {
      htmlEl.setAttribute("data-bs-theme", "dark");
      iconEl.classList.remove("bi-brightness-high");
      iconEl.classList.add("bi-moon");
    } else {
      htmlEl.setAttribute("data-bs-theme", "light");
      iconEl.classList.remove("bi-moon");
      iconEl.classList.add("bi-brightness-high");
    }
  });
});

// ...existing code...
