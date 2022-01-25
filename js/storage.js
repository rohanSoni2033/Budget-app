export default class Storage {
  constructor(username, id) {
    this.username = username;
    this.id = id;
  }
  _getAllData() {
    const expensesData = localStorage.getItem('expensesData');

    return JSON.parse(expensesData);
  }

  _saveData() {}

  _deleteData() {}

  _updateData() {}
}
