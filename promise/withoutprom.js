const order = () => {
  setTimeout(() => {
    return {
      orderId: 1234,
      message: "Order is placed",
      amount: 1000,
    };
  }, 2000);
};

const payment = (orderData) => {
  console.log("Payment is about to done");
  //console.log("order data in payment...",orderData)

  return {
    transactionId: 456,
    message: "Payment is done",
    amount: orderData?.amount, //optional chaining orderData && orderData.amount && orderData.amount
    orderId: orderData?.orderId,
  };
};

console.log("Order is about to place");
var orderData = order();
console.log("Order is placed...", orderData);
var paymentData = payment(orderData);
console.log("Payment is done...", paymentData);
