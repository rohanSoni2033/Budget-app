export default class Storage {
  static _getAllData() {
    const expensesList = localStorage.getItem('expensesList');
    return JSON.parse(expensesList);
  }

  static _saveData(data) {
    const savedExpensesList = this._getAllData();

    savedExpensesList[0].transactions.push({
      id: Math.floor(Math.random() * 10000000000),
      date: new Date().toLocaleDateString(),
      name: data.name,
      type: data.type,
      amount: data.amount,
    });

    this._saveToLocalStrorage(savedExpensesList);
  }

  static _deleteData(id) {
    const savedExpensesList = this._getAllData();
    const index = savedExpensesList[0].transactions.findIndex(
      (t) => t.id === +id
    );

    if (index > -1) {
      savedExpensesList[0].transactions.splice(index, 1);
      this._saveToLocalStrorage(savedExpensesList);
    }
  }

  static _updateData(id, data) {
    const savedExpensesList = this._getAllData();

    const index = savedExpensesList[0].transactions.findIndex(
      (t) => t.id === id
    );

    const transaction = savedExpensesList[0].transactions[index];

    if (index > -1) {
      transaction.name = data.name;
      transaction.type = data.type;
      transaction.amount = data.amount;
    }

    this._saveToLocalStrorage(savedExpensesList);
  }

  static _saveToLocalStrorage(savedExpensesList) {
    localStorage.setItem('expensesList', JSON.stringify(savedExpensesList));
  }
}
