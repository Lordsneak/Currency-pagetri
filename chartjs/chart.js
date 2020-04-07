let safi = document.getElementById('safi').getContext('2d');
let safi2 = document.getElementById('safi2').getContext('2d');
let safi1 = document.getElementById('safi1').getContext('2d');
let safi3 = document.getElementById('safi3').getContext('2d');


    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Roboto';
    Chart.defaults.global.defaultFontSize = 16;
    //Chart.defaults.global.defaultFontColor = '#000';

        new Chart(safi, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Average high °C ',
                data: [18.2, 19.0, 20.6, 21.3, 23.3, 24.6, 28.8, 29.2, 27.6, 25.2, 21.6, 18.8, 23.2]

            },
            {
                label: 'Daily mean °C ',
                data: [13.0, 13.8, 14.9, 16.0, 18.3, 20.3, 23.7, 24.1, 22.6, 20.0, 16.6, 13.7, 18.1]

            },
            {
                label: 'Average low °C',
                data: [7.7, 8.5, 9.2, 10.8, 13.3, 16.0, 18.5, 18.9, 17.5, 14.8, 11.6, 8.5, 12.9]

            }
        ],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 40
                    }
                }]
            }
        }
    });
    new Chart(safi1, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Average high °C ',
                data: [18.2, 19.0, 20.6, 21.3, 23.3, 24.6, 28.8, 29.2, 27.6, 25.2, 21.6, 18.8, 23.2]

            }
        ],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 40
                    }
                }]
            }
        }
    });
    new Chart(safi2, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Daily mean °C ',
                data: [13.0, 13.8, 14.9, 16.0, 18.3, 20.3, 23.7, 24.1, 22.6, 20.0, 16.6, 13.7, 18.1]

            }
        ],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 40
                    }
                }]
            }
        }
    });
    new Chart(safi3, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Average low °C',
                data: [7.7, 8.5, 9.2, 10.8, 13.3, 16.0, 18.5, 18.9, 17.5, 14.8, 11.6, 8.5, 12.9]

            }
        ],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 40
                    }
                }]
            }
        }
    });
    