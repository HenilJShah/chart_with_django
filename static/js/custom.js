// https://github.com/geekyshow1/geekyshowschartjs/blob/master/js/custom.js

// bar

var ctx = document.getElementById('bar_').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'colours',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['#1d55e2', '#1d55e2', '#1d55e2', '#1d55e2', '#1d55e2', '#1d55e2',],
            borderWidth: 5,
        },
        {
            data: [12, 21, 30, 51, 12, 73],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 5,
        }
        ]
    },
});



// line

var ctx = document.getElementById('line').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'colours',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['#1d55e2', '#1d55e2', '#1d55e2', '#1d55e2', '#1d55e2', '#1d55e2',],
            borderWidth: 5,
        },
        {
            data: [12, 21, 30, 51, 12, 73],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 5,
        }
        ]
    },
});




// Radar

var ctx = document.getElementById('radar').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'colours',
            data: [12, 25, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 5,
        },
        {
            data: [12, 21, 30, 51, 12, 73],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 5,
        }
        ]
    },
});

// Doughnut and Pie

var ctx = document.getElementById('Doughnut_and_Pie').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'colours',
            data: [12, 25, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 5,
        },
        {
            data: [12, 21, 30, 51, 12, 73],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 5,
        }
        ]
    },
});


// Pie

var ctx = document.getElementById('pie').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'colours',
            data: [12, 25, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 5,
        },
        {
            data: [12, 21, 30, 51, 12, 73],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 5,
        }
        ]
    },
});


// Polar Area

var ctx = document.getElementById('Polar_Area').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'colours',
            data: [12, 25, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 5,
        },
        {
            data: [12, 21, 30, 50, 12, 73],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 5,
        }
        ]
    },
});


// // Bubble Chart

// var ctx = document.getElementById('Bubble_Chart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bubble',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//                 label: 'colours',
//                 data: [12, 25, 3, 5, 2, 3],
//             },
//             {
//                 data: [12, 21, 30, 51, 12, 73],
//             }
//         ]
//     },
// });


// // Scatter Chart

// var ctx = document.getElementById('Scatter_Chart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'scatter',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//                 label: 'colours',
//                 data: [12, 25, 3, 5, 2, 3],
//             },
//             {
//                 data: [12, 21, 30, 51, 12, 73],
//             }
//         ]
//     },
// });

// Area_Charts

// var ctx = document.getElementById('radar').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'radar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//                 label: 'colours',
//                 data: [12, 25, 3, 5, 2, 3],
//             },
//             {
//                 data: [12, 21, 30, 51, 12, 73],
//             }
//         ]
//     },
// });


// // mixed

// var mixedChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         datasets: [{
//             label: 'Bar Dataset',
//             data: [10, 20, 30, 40]
//         }, {
//             label: 'Line Dataset',
//             data: [50, 50, 50, 50],

//             // Changes this dataset to become a line
//             type: 'line'
//         }],
//         labels: ['January', 'February', 'March', 'April']
//     },
//     options: options
// });