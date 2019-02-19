Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontFamily = 'Arial';

var ctx = document.getElementById('chart1').getContext('2d');
var temp = [-92, -55, -12, 5, 20, 30, 51];

var chart = new Chart(ctx, {
    type: 'line', 
    data: {
        labels: ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"],
        datasets: [{
            label: "Temperatuur",
            backgroundColor: 'rgb(60, 200, 132,0.2)',
            borderColor: '#FFFFFF',
            data: temp,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Aantal graden"
                }
            }]
        },
        legend: {
            position: 'none'},
        layout: {
            padding: {
                left: 0,
                right: 20,
                top: 0,
                bottom: 0,
            }
        }
    }
});

var ctx = document.getElementById('chart2').getContext('2d');
var voorrd = [30, 67, 3];

var chart = new Chart(ctx, {
    type: 'pie', //hier kan je andere dingen invullen, zoals doughnut. get started > charts
    data: {
        datasets: [{
            label: "Voorraad",
            hoverBackgroundColor: 'rgb(0, 200, 80,0.2)',
            borderColor: '#FFFFFF',
            data: voorrd,
            backgroundColor: [
            'rgba(90, 200, 80, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            ],
        }],
        labels: [
        'Voedsel', 
        'Water',
        'Verbruikt',
        ]
    },
    options: {
        legend: {
            position: 'bottom'},
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 20,
            }
        }
    }
});

var ctx = document.getElementById('chart3').getContext('2d');
var snelh = [50, 240, 330, 391, 480, 640, 710];

var chart = new Chart(ctx, {
    type: 'horizontalBar', 
    data: {
        label: "Aantal kilometers",
        labels: ["Dag 1", "Dag 2", "Dag 3", "Dag 4", "Dag 5", "Dag 6", "Dag 7"],
        datasets: [{
            label: ["Snelheid"],
            backgroundColor: [
            'rgba(90, 200, 80, 0.5)',
            'rgba(255, 19, 132, 0.5)',
            'rgba(205, 99, 132, 0.5)',
            'rgba(100, 99, 132, 0.5)',
            'rgba(90, 200, 80, 0.5)',
            'rgba(255, 19, 132, 0.5)',
            ],
            borderColor: '#FFFFFF',
            data: snelh,
            options: {legend: {
                labels: {fontColor: 'red'}
            }
        }
        }]
    },
    options: {
        layout: {
            padding: {
                left: 0,
                right: 20,
                top: 0,
                bottom: 20,
            }
        },
        legend: {
            position: 'none'},
        scales: {
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "KM"
          }
        }]
      }

    }
});

var ctx = document.getElementById('chart4').getContext('2d');
var planeten = [9.807,3.711,1.62];

var chart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        label: "Zwaartekracht planeten",
        labels: ["Aarde", "Mars", "Maan"],
        datasets: [
            {
              backgroundColor: ['rgba(90, 200, 80, 0.5)',
                'rgba(255, 19, 132, 0.5)',
                'rgba(205, 99, 132, 0.5)',
            ],
              data: planeten,
            }
          ]
    },
    options: {
    }
});