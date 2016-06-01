export default function setId(id, name) {
  const data = {};
  data[name] = id;
  console.log(id, name, data);
  this.setState({
    ...data,
  });
}
