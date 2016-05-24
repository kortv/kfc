import postGetMenuOne from './../api/postGetMenuOne';

export default function menuOne(e) {
  e.preventDefault();
  const id = e.currentTarget.getAttribute('data-id');
  const restaurantId = this.state.restaurantId;
  postGetMenuOne.call(this, restaurantId, id);
}
