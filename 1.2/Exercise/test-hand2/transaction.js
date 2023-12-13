/*
You have an array of transactions, where each transaction is an object with properties type
(either "income" or "expense") and amount (a numerical value). Calculate the total balance, 
which is the sum of all income transactions minus the sum of all expense transactions. 
Use a combination of map(), filter(), and reduce() to achieve this.
*/
const transactions = [
    { type: "income", amount: 1000 },
    { type: "expense", amount: 250 },
    { type: "income", amount: 500 },
    { type: "expense", amount: 300 },
    { type: "income", amount: 1200 }
  ];

const totalBalance= transactions
    .map((transaction)=>transaction.type==='income'?transaction.amount:-transaction.amount)
    .reduce((total,current)=>total+current,0)

console.log(`totalbalance : $${totalBalance}`)