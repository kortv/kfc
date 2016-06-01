import axios from 'axios';
import paths from './../../../_paths';

export default function postGetCityList() {
  axios.post(paths.cityList)
  .then((data) => {
    console.log(data);
    this.setState({
      cityList: data.data,
    });
  })
  .catch((response) => {
    console.log('get data error');
    console.log(response);
  });
}
