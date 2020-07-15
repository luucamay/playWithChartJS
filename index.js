var ctx = document.getElementById('myChart').getContext('2d');
var labels = ['earth', 'moon', 'sun', 'saturn', 'neptune', 'venus', 'mercury'];
var data = [10,20,30,25,15,0,80]
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels,
        datasets: [{
            label: 'Playing with Chart JS',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data
        }]
    },
    // Configuration options go here
    options: {}
});