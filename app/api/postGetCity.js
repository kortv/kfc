import axios from 'axios';
import paths from './../_paths';

export default function postGetCity() {
  axios.post('http://kfc-app-api-test.cubekit.io/api/v1/common/restaurants/cities/get-cities')
  .then((data) => {
    console.log(data);
  })
  .catch((response) => {
    console.log('get data error');
    console.log(response);
  });
}
