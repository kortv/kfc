import axios from 'axios';
import paths from './../_paths';

export default function postGetMenuOne(restaurantId, categoryId) {
  const path = paths.menuProduct;
  // const bodyData = {
  //   start: 0,
  //   count: 999,
  // };

  const bodyData = {
    filter: {
      type: 'and',
      args: [{
        type: 'eq',
        args: ['restaurant_id', restaurantId],
      }, {
        type: 'eq',
        args: ['category_id', categoryId],
      }],
    },
    sort: [{
      column: 'price',
      descending: false,
    }],
    start: 0,
    count: 999,
  };


  /*
  bodyData.filter = restaurantId ? {
    'type': 'eq',
    'args': ['restaurant_id', restaurantId],
  } : '';*/
/*  {
    filter: {
      type: 'and',
      args: [{
        type: 'eq',
        args: ['restaurant_id', restaurantId],
      }, {
        type: 'eq',
        args: ['category_id', 5],
      }],
    }, sort: [{
      column: 'price',
      descending: false,
    }], start: 0, count: 999,
  };*/
    /*      { start:0,count:999 } */
  /* {filter:{type:'eq',args:['restaurant_id','2995']},start:0,count:999}*/
  /* {filter:{type:'eq',args:[{restaurant_id:'2995', category_id: '5' }]},start:0,count:999}*/
  console.log(path, bodyData);
  axios.post(path, bodyData)
  .then((data) => {
    console.log(data);
    this.setState({
      productList: data.data.data,
    });
  })
  .catch((response) => {
    console.log('get data error');
    console.log(response);
  });
}
