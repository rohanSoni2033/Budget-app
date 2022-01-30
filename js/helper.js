export const getExpenseObject = (data) => {
  console.log(data);
  let spent = 0;
  const expenseObject = {};

  data.forEach((expense) => {
    if (expenseObject[expense.type]) {
      expenseObject[expense.type] += expense.amount;
    } else {
      expenseObject[expense.type] = expense.amount;
    }
    spent += expense.amount;
  });

  return { totalExpense: expenseObject, spent: spent };
};
