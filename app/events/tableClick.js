export default function tableClick(e) {
  e.preventDefault();
  console.log(e.target);
  this.setState({
    showMap: true,
  });
}
