import axios from 'axios';
import paths from './../../../_paths';

export default function postGetStreetList(street = '1-й Автозаводский проезд') {
  axios.post(paths.streetList, { city_id: this.state.cityId, street })
  .then((data) => {
    console.log(data);
    this.setState({
      streetList: data.data,
    });
  })
  .catch((response) => {
    console.log('get data error');
    console.log(response);
  });
}
