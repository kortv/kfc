import axios from 'axios';
import paths from './../../../_paths';

export default function postGetStreetList(letters = '', cityId) {
  axios.post(paths.streetList, { city_id: cityId || this.state.cityId, letters })
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
