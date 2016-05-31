export default function getTime(str) {
  const data = str.split(' ');
  const ans = {
    date: data[0].split('-').reverse().join('.'),
    time: data[1].slice(0, 5),
  };
  return ans;
}
