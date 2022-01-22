export default class Display {
  constructor(root) {
    const ctx = root.querySelector('#myChart');

    const myChart = new Chart(ctx, {
      type: 'doughnut',
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
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        // scales: {
        //   y: {
        //     beginAtZero: true,
        //   },
        // },
        layout: {
          padding: 180,
        },
      },
    });
  }
}
