var trace1 = {
  x: [1, 2, 3, 4, 10],
  y: [1, 6, 3, 6, 10],
  mode: 'markers+text',
  type: 'scatter',
  name: 'Team A',
  text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
  textposition: 'top center',
  textfont: {
    family:  'Raleway, sans-serif'
  },
  marker: { size: 12 }
};

var trace2 = {
  x: [1.5, 2.5, 3.5, 4.5, 5.5],
  y: [4, 1, 7, 1, 4],
  mode: 'markers+text',
  type: 'scatter',
  name: 'Team B',
  text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
  textfont : {
    family:'Times New Roman'
  },
  textposition: 'bottom center',
  marker: { size: 12 }
};

var data = [ trace1, trace2 ];

var layout = { 
  xaxis: {
    range: [ 0.75, 10.5 ] 
  },
  yaxis: {
    range: [0, 8]
  },
  legend: {
    y: 0.5,
    yref: 'paper',
    font: {
      family: 'Arial, sans-serif',
      size: 20,
      color: 'grey',
    }
  },
  title:'Data Labels on the Plot'
};

Plotly.newPlot('myDiv', data, layout);
