import axios from 'axios';

export default function postGetOrders(path, body) {
  axios.post(path, body || {})
  .then((data) => {
    console.log(data);
    this.setState({
      orders: data.data.data,
    });
  })
  .catch((response) => {
    console.log('get data error');
    console.log(response);
  });
}
