export default function () {
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('currentUser');
  return new Promise(((resolve) => {
    setTimeout(resolve, 100);
  }));
}
