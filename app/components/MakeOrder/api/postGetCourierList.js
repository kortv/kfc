import axios from 'axios';
import paths from './../../../_paths';

export default function postGetCourierList() {
  axios.post(paths.courierList, {
    "filter": {
        "type": "match",
        "args": [
            "type",
            "2"
        ]
    },
    "filter": {
        "type": "match",
        "args": [
            "restaurant_id",
            "2571"
        ]
    }
})
  .then((data) => {
    console.log(JSON.stringify(data.data));
  })
  .catch((response) => {
    console.log('get data error');
    console.log(response);
  });
}
