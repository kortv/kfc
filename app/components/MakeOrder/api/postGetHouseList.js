import axios from 'axios';
import paths from './../../../_paths';

export default function postGetHouseList(street = '') {
  axios.post(paths.houseList, { city_id: this.state.cityId, street })
  .then((data) => {
    console.log(data);
    this.setState({
      houseList: data.data,
    });
  })
  .catch((response) => {
    console.log('get data error');
    console.log(response);
  });
}
