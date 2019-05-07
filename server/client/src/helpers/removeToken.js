export default function (token) {
  localStorage.removeItem('jwtToken');
  return new Promise(((resolve, reject) => {
    setTimeout(resolve, 100);
  }));
}
