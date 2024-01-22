// basic area chart
var options = {
    chart: {
        height: 350,
        type: 'area',
        zoom: {
            enabled: false
        },
        toolbar:{
          show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    series: [{
        name: "STOCK ABC",
        data: series.monthDataSeries1.prices
    }],
    title: {
        text: 'Fundamental Analysis of Stocks',
        align: 'left'
    },
    subtitle: {
        text: 'Price Movements',
        align: 'left'
    },
    labels: series.monthDataSeries1.dates,
    xaxis: {
        type: 'datetime',
    },
    yaxis: {
        opposite: true
    },
    legend: {
        horizontalAlign: 'left'
    },
    colors:[ CubaAdminConfig.primary ]

}

var chart = new ApexCharts(
    document.querySelector("#basic-apex"),
    options
);

chart.render();

// area spaline chart
var options1 = {
    chart: {
        height: 350,
        type: 'area',
        toolbar:{
          show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }],

    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
    colors:[ CubaAdminConfig.primary , CubaAdminConfig.secondary ]
}

var chart1 = new ApexCharts(
    document.querySelector("#area-spaline"),
    options1
);

chart1.render();

// basic bar chart
var options2 = {
    chart: {
        height: 350,
        type: 'bar',
        toolbar:{
          show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
    },
    colors:[ CubaAdminConfig.primary ]
}

var chart2 = new ApexCharts(
    document.querySelector("#basic-bar"),
    options2
);

chart2.render();

// column chart
var options3 = {
    chart: {
        height: 350,
        type: 'bar',
        toolbar:{
          show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            endingShape: 'rounded',
            columnWidth: '55%',
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    series: [{
        name: 'AFD',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'RAB',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
        name: 'NTMC',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    },{
        name: 'BGB',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },{
        name: 'POLICE',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },{
        name: 'DGFI',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },{
        name: 'SB',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },],
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
        title: {
            text: ''
        }
    },
    fill: {
        opacity: 1

    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val
            }
        }
    },
    colors:[ CubaAdminConfig.primary , CubaAdminConfig.secondary , '#51bb25']
}

var chart3 = new ApexCharts(
    document.querySelector("#column-chart"),
    options3
);

chart3.render();

// 3d bubble chart

function generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        //var x =Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([baseval, y, z]);
        baseval += 86400000;
        i++;
    }
    return series;
}


var options = {
    chart: {
        height: 350,
        type: 'bubble',
        toolbar:{
          show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        name: 'AFD',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
        {
            name: 'NTMC',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'RAB',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'SB',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
            
        },

        {
            name: 'Police',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
            
        },
    ],
    fill: {
        type: 'gradient',
    },
    title: {
        text: ''
    },
    xaxis: {
        tickAmount: 12,
        type: 'datetime',

        labels: {
            rotate: 0,
        }
    },
    yaxis: {
        max: 70
    },
    theme: {
        palette: 'palette2'
    },
    stroke: {
        width: 0
    },
    colors:[ CubaAdminConfig.primary , CubaAdminConfig.secondary , '#51bb25', '#f8d62b']
}

var chart = new ApexCharts(
    document.querySelector("#chart-bubble"),
    options
);

chart.render();

