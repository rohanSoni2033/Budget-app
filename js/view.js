export default class View {
  constructor(root, data, { changeChartType, deleteExpense }) {
    this.root = root;
    this.changeChartType = changeChartType;
    this.deleteExpense = deleteExpense;

    this._BtnChangeChartType();

    const dashboard = `
      <div class="dashboard col">
        <div class="container--user-details row">
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
        <div class="container--balance-details">
          <div class="available-balance">
            <div class="col">
              <span class="available-balance-title">avilable balance</span>
              <span class="date">${new Date().toLocaleDateString()}</span>
            </div>
              <h2 class="total-available-balance" id="avilableBalance">₹ ${
                data.avilableBalance
              }</h2>
          </div>
          <div class="other-balance">
            <div class="col">
                <span class="spent small-bold">spent</span>
                <h3 id="spent">₹ ${data.spent}</h3>
            </div>
            <div class="col">
                <span class="income small-bold">income</span>
                <h3 id="income">₹ ${data.income}</h3>
            </div>
          </div>
        </div>


        <div class="container--transactions-list">

           ${data.transactions
             .map((transaction) => {
               return `
                      <div class="container--transaction" data-id="${transaction.id}">
                        <div class="row">
                          <div class="transaction-details">
                            <svg id="svg--${transaction.type}">
                                <use href="./sprite.svg#svg--${transaction.type}" />
                            </svg>
                            <div class="transaction-name col">
                                <span>${transaction.name}</span>
                                <span class="transaction-date">${transaction.date}</sp>
                            </div>
                          </div>
                            <h3 class="transaction-amount debit">₹${transaction.amount}</h3>
                        </div>
                        <div class="container--btn">
                            <button class="btn flex-center btn--edit-transaction">
                                <svg>
                                    <use href="./sprite.svg#edit" />
                                </svg>
                            </button>
                            <button class="btn flex-center btn--delete-transaction">
                                <svg>
                                    <use href="./sprite.svg#delete" />
                                </svg>
                            </button>
                        </div>
                    </div>`;
             })
             .join('')}
        </div>
    </div> 
     <div class="modal--add-transaction hide">
                <form class="form--add-expense">
                    <div class="col">
                        <div class="row">
                            <div class="col">
                                <span class="username">Hii ${
                                  data.username
                                }</span>
                                <span class="welcome">Welcome,</span>
                            </div>
                            <button class="btn flex-center close--modal" type="button">
                                <svg>
                                    <use href="./sprite.svg#highlight">
                                </svg>
                            </button>
                        </div>
                        <div class="container--input-expense-name">
                            <label for="expense-name">what is this for</label>
                            <input type="text" class="inp input--expense-name"
                                placeholder="eg. bought new t-shirt, paid electricity bills">
                        </div>
                    </div>
                    <div class="container--input-expense">
                        <div class="container--input-expense-amount">
                            <label for="expense-amount">Enter the amount</label>
                            <input type="text" class="inp input--expense-amount" id="expense-amount"
                                placeholder="₹ 1250">
                        </div>
                        <div class="expense-category">
                            <p>category</p>
                            <button class="btn select-expense-category" id="select-expense-category" type="button">
                                <svg>
                                    <use href="./sprite.svg#svg--other" />
                                </svg>
                            </button>
                            <div class="container-expenses-type-option hidden">
                                <div class="expenses-type-option">
                                    <input type="radio" name="expenses-type" id="education">
                                    <label for="education"> <svg id="svg--education">
                                            <use href="./sprite.svg#svg--education" />
                                        </svg> education</label>
                                </div>
                                <div class="expenses-type-option">
                                    <input type="radio" name="expenses-type" id="Repair-&-Maintanense">
                                    <label for="Repair-&-Maintanense"><svg id="svg--RepairMaintanense">
                                            <use href="./sprite.svg#svg--RepairMaintanense" />
                                        </svg> Repair & Maintanense</label>
                                </div>
                                <div class="expenses-type-option">
                                    <input type="radio" name="expenses-type" id="bills">
                                    <label for="bills"><svg id="svg--rechargeBills">
                                            <use href="./sprite.svg#svg--rechargeBills" />
                                        </svg> recharge & bills</label>
                                </div>
                                <div class="expenses-type-option">
                                    <input type="radio" name="expenses-type" id="entertainment">
                                    <label for="entertainment"><svg id="svg--entertainment">
                                            <use href="./sprite.svg#svg--entertainment" />
                                        </svg> entertainment</label>
                                </div>
                                <div class="expenses-type-option">
                                    <input type="radio" name="expenses-type" id="traveling">
                                    <label for="traveling"><svg id="svg--traveling">
                                            <use href="./sprite.svg#svg--traveling" />
                                        </svg> traveling</label>
                                </div>
                                <div class="expenses-type-option">
                                    <input type="radio" name="expenses-type" id="health">
                                    <label for="health"><svg id="svg--health">
                                            <use href="./sprite.svg#svg--health" />
                                        </svg> health</label>
                                </div>
                                <div class="expenses-type-option">
                                    <input type="radio" name="expenses-type" id="vehicle">
                                    <label for="vehicle"><svg id="svg--vehicle">
                                            <use href="./sprite.svg#svg--vehicle" />
                                        </svg> vehicle</label>
                                </div>
                                <div class="expenses-type-option">
                                    <input type="radio" name="expenses-type" id="shopping">
                                    <label for="shopping"><svg id="svg--shopping">
                                            <use href="./sprite.svg#svg--shopping" />
                                        </svg> shopping</label>
                                </div>
                                <div class="expenses-type-option">
                                    <input type="radio" name="expenses-type" id="rent">
                                    <label for="rent"><svg id="svg--rent">
                                            <use href="./sprite.svg#svg--rent" />
                                        </svg> rent</label>
                                </div>
                                <div class="expenses-type-option">
                                    <input type="radio" name="expenses-type" id="investment">
                                    <label for="investment"><svg id="svg--investment">
                                            <use href="./sprite.svg#svg--investment" />
                                        </svg> investment</label>
                                </div>
                                <div class="expenses-type-option">
                                    <input type="radio" name="expenses-type" id="food">
                                    <label for="food"><svg id="svg--food">
                                            <use href="./sprite.svg#svg--food" />
                                        </svg> food</label>
                                </div>
                                <div class="expenses-type-option">
                                    <input type="radio" name="expenses-type" id="other">
                                    <label for="other"><svg id="svg--other">
                                            <use href="./sprite.svg#svg--other" />
                                        </svg> other</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="container-num-tab">
                    <button class="btn num-tab--num">1</button>
                    <button class="btn num-tab--num">2</button>
                    <button class="btn num-tab--num">3</button>
                    <button class="btn num-tab--num">4</button>
                    <button class="btn num-tab--num">5</button>
                    <button class="btn num-tab--num">6</button>
                    <button class="btn num-tab--num">7</button>
                    <button class="btn num-tab--num">8</button>
                    <button class="btn num-tab--num">9</button>
                    <button class="btn num-tab--num zero">0</button>
                    <button class="btn num-tab--num">.</button>
                    <button class="btn num-tab--num backspace">
                        <svg id="backspace-button">
                            <use href="./sprite.svg#backspace">
                        </svg>
                    </button>
                    <button class="btn num-tab--num enter">
                        <svg id="arrow-left">
                            <use href="./sprite.svg#arrow-left">
                        </svg>
                    </button>
                </div>
            </div>
   `;

    this.root
      .querySelector('.section--details')
      .insertAdjacentHTML('afterbegin', dashboard);

    this.root
      .querySelector('.btn--add-transaction')
      .addEventListener('click', this._displayModalTransaction.bind(this));

    this.root
      .querySelector('.close--modal')
      .addEventListener('click', this._displayModalTransaction.bind(this));

    this._addHandlersBtn();
  }

  _updateBalance(avilableBalance, spent) {
    this.root.querySelector('#avilableBalance').textContent = avilableBalance;
    this.root.querySelector('#spent').textContent = spent;
  }

  _displayModalTransaction() {
    this.root.querySelector('.modal--add-transaction').classList.toggle('hide');
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

  _addHandlersBtn() {
    this.root.querySelectorAll('.btn--delete-transaction').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const expenseElement = e.target.closest('.container--transaction');
        const { id } = expenseElement.dataset;

        expenseElement.classList.add('remove');
        setTimeout(() => {
          expenseElement.remove();
        }, 400);

        this.deleteExpense(id);
      });
    });

    this.root.querySelectorAll('.btn--edit-transaction').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const { id } = e.target.closest('.container--transaction').dataset;
      });
    });
  }
}
