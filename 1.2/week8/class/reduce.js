const sellProducts = [
    { id: 1, price: 10, sell: 2},
    { id: 2, price: 50, sell: 2},
    { id: 3, price: 54, sell: 2},
    { id: 4, price: 22, sell: 2}
]

const result = sellProducts.reduce(
    (total, { price, sell }) => total + price * sell,
    0
  );
  console.log(result);