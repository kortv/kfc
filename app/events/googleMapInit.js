export default function goo() {
  const mapProp = {
    center: new google.maps.LatLng(55.749473, 37.626723),
    zoom: 12,
    panControl: true,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    overviewMapControl: true,
    rotateControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  const map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
  console.log(map);
}
