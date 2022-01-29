export const getExpenseObject = (data) => {
  const expenseObject = {};

  data.forEach((expense) => {
    if (expenseObject[expense.type]) {
      expenseObject[expense.type] += expense.amount;
    } else {
      expenseObject[expense.type] = expense.amount;
    }
  });

  return expenseObject;
};
