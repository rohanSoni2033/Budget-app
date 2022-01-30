import Storage from './storage.js';
import Display from './chart.js';
import View from './view.js';
import { getExpenseObject } from './helper.js';

export default class App {
  constructor(root) {
    this.root = root;
    this.chartType = undefined;
    this.chartData = [];
    this._refresh();

    this.view = new View(this.root, this.data, this._handlers());

    console.log(this);
  }

  _handlers() {
    return {
      changeChartType: (chartType) => {
        this.chartType = chartType;
        this._refresh();
      },
      deleteExpense: (id) => {
        Storage._deleteData(id);
        console.log('delete this expense ' + id);

        this._refresh();
      },
    };
  }

  _refresh() {
    this.data = Storage._getAllData()[0];
    const expenseObject = getExpenseObject(this.data.transactions);
    this.chartData = expenseObject.totalExpense;
    this.data.spent = expenseObject.spent;
    this.data.avilableBalance = this.data.income - expenseObject.spent;

    new Display(this.root, this.chartType || 'doughnut', this.chartData);
  }
}
