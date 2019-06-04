import jwtDecode from 'jwt-decode';

export default async function (token) {
  await localStorage.setItem('jwtToken', token);
  await localStorage.setItem('currentUser', JSON.stringify(jwtDecode(token)));
  return new Promise(((resolve, reject) => {
    setTimeout(resolve, 100);
  }));
}
