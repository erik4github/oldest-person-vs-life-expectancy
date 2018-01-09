Chart.defaults.global.legend.labels.usePointStyle = true;

var ctx = document.getElementById('myChart').getContext('2d');

var oldest_person = [109,110,111,112,113,110,110,110,111,111,111,110,111,112,111,112,113,111,111,111,112,113,113,113,114,114,114,114,114,114,115,116,117,118,119,120,121,122,117,119,114,115,114,114,114,115,116,115,115,115,114,115,116,116,116,117];

var european_union = [69.28,69.58,69.51,69.75,70.22,70.33,70.56,70.67,70.72,70.67,70.99,71.1,71.41,71.53,71.82,71.92,72.12,72.41,72.52,72.76,72.86,73.2,73.46,73.52,73.8,73.87,74.14,74.38,74.57,74.74,74.86,74.96,75.28,75.39,75.69,75.81,76.06,76.36,76.59,76.82,77.15,77.49,77.6,77.69,78.19,78.36,78.73,78.96,79.18,79.44,79.72,80.23,80.25,80.53,80.92,81.12];

var europe_central_asia = [67.03,67.39,67.48,67.75,68.14,68.29,68.5,68.63,68.69,68.7,68.98,69.11,69.32,69.41,69.62,69.59,69.69,69.86,69.95,70.07,70.18,70.44,70.73,70.8,70.95,71.17,71.65,71.87,72,72.06,72.07,71.98,71.91,71.59,71.66,71.76,72.14,72.55,72.86,72.91,73.06,73.34,73.42,73.53,73.97,74.13,74.62,74.98,75.24,75.63,75.92,76.43,76.57,76.89,77.2,77.39];

var north_america = [69.89,70.36,70.23,70.05,70.31,70.36,70.37,70.71,70.17,70.69,70.98,71.28,71.32,71.52,72.07,72.69,72.95,73.34,73.47,73.9,73.75,74.15,74.49,74.61,74.73,74.73,74.79,74.96,74.96,75.22,75.43,75.58,75.78,75.64,75.84,75.85,76.24,76.63,76.78,76.8,76.89,77.09,77.19,77.31,77.74,77.76,77.94,78.23,78.3,78.64,78.8,78.92,79.02,79.04,79.06,79.08];

var latin_america = [56.05,56.54,57,57.45,57.88,58.3,58.72,59.13,59.55,59.98,60.41,60.83,61.25,61.66,62.06,62.44,62.82,63.19,63.56,63.94,64.31,64.68,65.04,65.4,65.75,66.1,66.44,66.77,67.11,67.44,67.78,68.13,68.5,68.87,69.25,69.64,70.03,70.42,70.79,71.14,71.49,71.8,72.11,72.39,72.67,72.93,73.19,73.44,73.68,73.92,74.16,74.39,74.62,74.84,75.06,75.27];

var east_asia = [48.5,49.03,49.69,50.66,51.86,53.22,54.75,56.24,57.61,58.85,59.89,60.81,61.6,62.3,63,63.66,64.27,64.85,65.38,65.87,66.28,66.69,67.08,67.4,67.73,68.02,68.29,68.54,68.73,68.94,69.12,69.31,69.47,69.65,69.85,70.03,70.31,70.59,70.88,71.21,71.58,71.95,72.31,72.64,72.97,73.24,73.52,73.77,73.99,74.22,74.4,74.56,74.75,74.93,75.1,75.25];

var arab_world = [46.81,47.39,47.97,48.56,49.14,49.73,50.3,50.86,51.4,51.93,52.46,53,53.57,54.16,54.78,55.4,56.03,56.64,57.25,57.85,58.46,59.1,59.75,60.43,61.1,61.75,62.37,62.93,63.44,63.88,64.31,64.68,64.98,65.34,65.71,66.12,66.48,66.82,67.14,67.43,67.7,67.95,68.2,68.44,68.69,68.95,69.2,69.44,69.67,69.87,70.07,70.25,70.44,70.63,70.82,71.02];

var sub_saharan_africa = [40.36,40.8,41.23,41.64,42.05,42.45,42.85,43.25,43.65,44.06,44.47,44.89,45.31,45.73,46.13,46.52,46.89,47.24,47.58,47.9,48.2,48.49,48.77,49.02,49.26,49.46,49.63,49.75,49.81,49.84,49.85,49.84,49.85,49.85,49.87,49.9,49.94,50.01,50.11,50.27,50.51,50.83,51.26,51.78,52.39,53.08,53.83,54.61,55.4,56.17,56.91,57.6,58.24,58.84,59.39,59.9];

var japan = [67.66,68.31,68.59,69.65,70.13,70.2,70.98,71.27,71.61,71.83,71.95,72.88,73.5,73.75,74.39,75.05,75.45,75.89,76.03,76.33,76.09,76.41,76.92,76.96,77.36,77.65,78.06,78.48,78.39,78.81,78.83,79.1,79.15,79.29,79.68,79.53,80.2,80.42,80.5,80.57,81.07,81.41,81.56,81.76,82.03,81.92,82.32,82.5,82.58,82.93,82.84,82.59,83.09,83.33,83.58,83.84];

var world_life = [52.58,53.08,53.51,54.04,54.71,55.38,56.12,56.83,57.44,58.05,58.64,59.17,59.65,60.1,60.59,61.03,61.45,61.87,62.22,62.58,62.86,63.2,63.51,63.76,64.01,64.26,64.56,64.81,65.02,65.24,65.43,65.62,65.78,65.91,66.12,66.32,66.61,66.91,67.17,67.4,67.68,67.98,68.24,68.52,68.86,69.13,69.47,69.79,70.08,70.4,70.68,70.97,71.21,71.46,71.69,71.88];

var years = ['1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'];

var chartData = {
    labels: years,
    datasets: [{
      label: 'Japan',
      data: japan,
      backgroundColor: "#D939CD",
      borderColor: "#D939CD",
      type: 'line',
      fill: false
    }, {
      label: 'European Union',
      data: european_union,
      borderColor: "#0082c8",
      backgroundColor: "#0082c8",
      fill: false,
      type: 'line',
    }, {
      label: 'Europe and Central Asia',
      data: europe_central_asia,
      borderColor: "#ff5e62",
      backgroundColor: "#ff5e62",
      fill: false,
      type: 'line'
    }, {
      label: 'North America',
      data: north_america,
      borderColor: "#8E0E00",
      backgroundColor: "#8E0E00",
      fill: false,
      type: 'line'
    }, {
      label: 'Latin America & Caribbean',
      data: latin_america,
      borderColor: "#00bf8f",
      backgroundColor: "#00bf8f",
      fill: false,
      type: 'line',
    }, {
      label: 'East Asia & Pacific',
      data: east_asia,
      borderColor: "#FFF6B7",
      backgroundColor: "#FFF6B7",
      fill: false,
      type: 'line'
    }, {
      label: 'Arab World',
      data: arab_world,
      borderColor: "#ED8F03",
      backgroundColor: "#ED8F03",
      fill: false,
      type: 'line',
    }, {
      label: 'Sub-Saharan Africa',
      data: sub_saharan_africa,
      borderColor: "#076585",
      backgroundColor: "#076585",
      fill: false,
      type: 'line'
    }, {
      label: 'World Life Expectancy',
      data: world_life,
      borderColor: "#8e5ea2",
      backgroundColor: "#8e5ea2",
      fill: false,
      type: 'line'
    }, {
      label: 'Age of World\'s Oldest Person',
      data: oldest_person,
      backgroundColor: "#1f2533",
      borderColor: "#1f2533",
      type: 'bar'
    }]
  };
window.onload = function () {
  var ctx = document.getElementById("myChart").getContext("2d");
  window.myMixedChart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: ['Age of Oldest Person In World','Compared To Life Expectancy of Regions of the World'],
        fontSize: 24,
        fontColor: 'white'
      },
      legend: {
      display: true,
      position: 'right',
        labels: { 
          padding: 40,
          fontSize: 16,
          fontColor: 'white'
      }
    },
      elements: { 
        point: { 
          radius: 0,
          hitRadius: 10, 
          hoverRadius: 10, 
          pointStyle: 'circle'
      } 
    },
      tooltips: {
        mode: 'index',
        intersect: true,
        itemSort: (a, b, data) => b.yLabel - a.yLabel,
            callbacks: {
                label: function(tooltipItems, data) { 
                return tooltipItems.yLabel + ' Years';
            }
      },
      scales: {
        yAxes: [{
          ticks: {
            fontSize: 18,
            fontColor: 'white',
            // suggestedMax: 125
          }
        }],
        xAxes: [{
          ticks: {
            padding: 10,
            fontSize: 18,
            fontColor: 'white'
          },
          gridLines: {
            display: false
          }
        }]
      },
    }
  });
};
