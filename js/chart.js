export default class Display {
  constructor(root, type, chartData) {
    root.querySelector('#chart').remove();

    const labels = Object.keys(chartData);
    const expenseAmount = Object.values(chartData);

    const chartContainer = root.querySelector('.container-chart');

    chartContainer.insertAdjacentHTML(
      'afterbegin',
      '<canvas id="chart"></canvas>'
    );
    const ctx = root.querySelector('#chart').getContext('2d');

    const data = {
      labels,
      datasets: [
        {
          label: '# of Votes',
          data: expenseAmount,
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
        },
      ],
    };

    const config = {
      type: `${type}`,
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        layout: {
          padding: 20,
        },
      },
    };

    new Chart(ctx, config);
  }
}
