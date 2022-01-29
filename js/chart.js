import labelsColor from './labelsColor.js';

export default class Display {
  constructor(root, type, chartData) {
    root.querySelector('#chart').remove();

    const labels = Object.keys(chartData);
    const expenseAmount = Object.values(chartData);
    const backgroundColor = labels.map((label) => labelsColor[label]);

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
          backgroundColor,
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
