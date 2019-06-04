export default function (token) {
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('currentUser');
  return new Promise(((resolve, reject) => {
    setTimeout(resolve, 100);
  }));
}
