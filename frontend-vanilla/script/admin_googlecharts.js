/* Grafico Pizza Pagina Admin */

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Cachorros', 60],
    ['Passaros', 10],
    ['Tartarugas', 5],
    ['Outros', 5],
    ['Gatos', 30]
  ]);

  var options = {
    title: 'Tipos de Pet'
  };

  var chart = new google.visualization.PieChart(document.getElementById('grafico-adm'));

  chart.draw(data, options);
}

// $(window).resize(function () {
//     desenharPizza();
// });


google.charts.setOnLoadCallback(drawChart);
