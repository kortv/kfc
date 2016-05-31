import postGetMenuOne from './../api/postGetMenuOne';

export default function setRestaurantId(restaurantId) {
  console.log(restaurantId);
  this.setState({
    restaurantId,
  });
  postGetMenuOne.call(this, restaurantId, 1);
}
