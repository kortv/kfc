export default function onCount(product, sign) {
  console.log(product);
  const { id, image, title, price } = product;
  const basket = this.state.basket;
  basket[product.id] = basket[product.id] || { id, image, title, price };
  basket[product.id].qty = basket[product.id].qty + sign || sign;
  if (basket[product.id].qty <= 0) {
    delete basket[product.id];
  }
  this.setState({ basket });
}
