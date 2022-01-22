export default class Display {
  constructor(root, type) {
    root.querySelector('#myChart').remove();

    // var ctx = document.getElementById('canvas').getContext('2d');

    const chartContainer = root.querySelector('.section--chart');

    chartContainer.insertAdjacentHTML(
      'beforeend',
      '<canvas id="myChart"></canvas>'
    );
    const ctx = root.querySelector('#myChart').getContext('2d');

    this.myChart = new Chart(ctx, {
      type: `${type}`,
      data: {
        labels: [
          'Education',
          'Repair-&-Maintanense',
          'Shopping',
          'Entertainment',
          'Health',
          'Vehicle',
          'Investment',
          'Food',
          'Other',
        ],
        datasets: [
          {
            label: '# of Votes',
            data: [1200, 190, 1600, 500, 200, 130, 1300, 560, 600],
            backgroundColor: [
              'rgb(100, 0, 231)',
              'lightseagreen',
              'rgb(243, 0, 0)',
              'rgb(114, 0, 180)',
              'rgb(0, 180, 0)',
              'rgb(168, 124, 58)',
              'orange',
              'rgb(252, 116, 25)',
              'rgb(0, 240, 60)',
            ],
            // borderColor: [
            //   'rgba(255, 99, 132, 1)',
            //   'rgba(54, 162, 235, 1)',
            //   'rgba(255, 206, 86, 1)',
            //   'rgba(75, 192, 192, 1)',
            //   'rgba(153, 102, 255, 1)',
            //   'rgba(255, 159, 64, 1)',
            //   'rgba(255, 206, 86, 1)',
            //   'rgba(75, 192, 192, 1)',
            // ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        layout: {
          padding: 100,
        },
      },
    });
  }
}
