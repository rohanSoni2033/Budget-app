export default class View {
  constructor(root, data, { changeChartType }) {
    this.root = root;
    this.changeChartType = changeChartType;

    this._BtnChangeChartType();

    const dashboard = `
      <div class="dashboard col">
        <div class="container--user-details">
          <div class="row">
            <div class="col">
                <span class="username">Hii ${data.username}</span>
                <span class="welcome">Welcome,</span>
            </div>
            <button class="btn btn--add-transaction">
              <svg id="add">
                  <use href="./sprite.svg#add" />
              </svg>
            </button>
          </div>
        </div>
        <div class="container--balance-details">
          <div class="available-balance">
            <div class="col">
              <span class="available-balance-title">avilable balance</span>
              <span class="date">${new Date().toLocaleDateString()}</span>
            </div>
              <h2 class="total-available-balance">₹ ${data.avilableBalance}</h2>
          </div>
          <div class="other-balance">
            <div class="col">
                <span class="spent small-bold">spent</span>
                <h3>₹ ${data.spent}</h3>
            </div>
            <div class="col">
                <span class="income small-bold">income</span>
                <h3>₹ ${data.income}</h3>
            </div>
          </div>
        </div>
        <div class="container--transactions-list">

           ${data.transactions
             .map((transaction) => {
               return `
        <div class="container--transation">
          <div class="flex-center col">
            <h3>${transaction.date}</h3>
            <h5>TODAY</h5>
          </div>
          <div class="transaction-details">
            <span class="transaction-name">${transaction.name}</span>
            <span class="transaction-time"></span>
            <h3 class="transaction-amount debit">${transaction.amount}</h3>
            <div class="transaction-type">
              <svg id="explore">
                <use href="./sprite.svg#explore" />
              </svg>
            </div>
           </div>
        </div>
             `;
             })
             .join('')}
        </div>
   `;

    this.root
      .querySelector('.section--balance-details')
      .insertAdjacentHTML('afterbegin', dashboard);
  }

  _displayData() {
    this.root.querySelector('.');
  }

  _BtnChangeChartType() {
    const changeChartTypeButtons =
      this.root.querySelectorAll('.change-chart-type');
    changeChartTypeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.changeChartType(btn.dataset.charttype);
      });
    });
  }
}
