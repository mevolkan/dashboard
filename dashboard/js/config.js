const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];
const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};
const config = {
    type: 'line',
    data: data,
    options: {
        animations: {
            tension: {
              duration: 10000,
              easing: 'easeInSine',
              from: 1,
              to: 0,
              loop: true
            }
    }
}
};