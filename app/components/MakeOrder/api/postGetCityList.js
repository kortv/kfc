import axios from 'axios';
import paths from './../../../_paths';

export default function postGetCityList() {
  axios.post(paths.cityList)
  .then((data) => {
    console.log(data);
    const mos = data.data.filter((obj) => obj.title == 'Москва');
    console.log(mos);
    this.setState({
      cityList: data.data,
    });
  })
  .catch((response) => {
    console.log('get data error');
    console.log(response);
  });
}
