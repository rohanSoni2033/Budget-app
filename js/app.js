import Storage from './storage.js';
import Display from './chart.js';
import View from './view.js';
import { getExpenseObject } from './helper.js';

export default class App {
  constructor(root) {
    this.root = root;
    this.chartType = undefined;
    this.data = Storage._getAllData()[0];
    this.chartData = [];

    this.view = new View(this.root, this.data, this._handlers());
    this._refresh();
  }

  _handlers() {
    return {
      changeChartType: (chartType) => {
        this.chartType = chartType;

        this._refresh();
      },
      addExpense: (data) => {
        Storage._saveData(data);

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
    const spent = expenseObject.spent;
    const avilableBalance = this.data.income - spent;
    this.view._updateBalance(this.data.transactions, avilableBalance, spent);
    new Display(this.root, this.chartType || 'doughnut', this.chartData);
  }
}
