import axios from 'axios';
import paths from './../_paths';

export default function postOrderBasket() {
  const basket = this.state.basket;
  const basketOrder = Object.keys(basket).map((name) => basket[name]);
  console.log(JSON.stringify(basketOrder));
  axios.post(paths.basketOrder, basketOrder)
  .then((data) => {
    console.log(data);
  })
  .catch((response) => {
    console.log('get data error');
    console.log(response);
  });
}
