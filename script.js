Chart.defaults.global.defaultFontColor = 'rgb(175,175,175)';
Chart.defaults.global.defaultFontFamily = 'Arial';

var ctx = document.getElementById('chart1').getContext('2d');
var temp = [-92, -55, -12, 5, 20, 30, 51];

var chart = new Chart(ctx, {
    type: 'line', 
    data: {
        labels: ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"],
        datasets: [{
            label: "Temperatuur",
            backgroundColor: 'rgba(78, 141, 44, 0.8)',
            borderColor: '#FFFFFF',
            data: temp,
        }]
    },
    options: {
        scales: {
        xAxes: [{ 
          gridLines: {
            color: 'grey',
            lineWidth: 1
        }
        }],
        yAxes: [{ 
            scaleLabel: {
            display: true,
            labelString: "Aantal graden",
          },
          gridLines: {
            color: 'white',
            lineWidth: 1
        }
        }]
      },
        legend: {
            position: 'none'},
        layout: {
            padding: {
                left: 0,
                right: 20,
                top: 20,
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
            'rgba(78, 141, 44, 0.8)',
            'rgba(0, 149, 221, 0.8)',
            'rgba(176, 207, 254, 0.8)',
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
                bottom: 0,
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
            'rgba(78, 141, 44, 0.8)',
            'rgba(0, 149, 221, 0.8)',
            'rgba(176, 207, 254, 0.8)',
            'rgba(66, 218, 254, 0.8)',
            'rgba(66, 140, 247, 0.8)',
            'rgba(66, 80, 132, 0.8)',
            'rgba(66, 121, 92, 0.8)',
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
                top: 20,
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
          },
          gridLines: {
            color: 'white',
            lineWidth: 1
        }
        }],
        yAxes: [{ 
          gridLines: {
            color: 'white',
            lineWidth: 1
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
              backgroundColor: [
                'rgba(78, 141, 44, 0.5)',
                'rgba(0, 149, 221, 0.5)',
                'rgba(176, 207, 254, 0.5)',
            ],
              data: planeten,
            }
          ]
    },
    options: {
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            }
        },
        legend: {
            position: 'bottom'},
        animation: {
            animateRotate: false,
            animateScale: true
        },
        scale: {
            gridLines: {color:'grey'}
        }
    }
});