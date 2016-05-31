import axios from 'axios';
import paths from './../_paths';

export default function postGetStreetList() {
  axios.post(paths.idList, { city_id: 4, street: '1-й Автозаводский проезд' })
  .then((data) => {
    console.log(data);
    const mos = data.data.filter((obj) => obj.title == 'Москва');
    console.log(mos);
  })
  .catch((response) => {
    console.log('get data error');
    console.log(response);
  });
}
