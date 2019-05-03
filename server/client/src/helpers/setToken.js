import  jwtDecode from 'jwt-decode';

export default function(token) {
    localStorage.setItem('jwtToken', token);
    localStorage.setItem('currentUser', JSON.stringify(jwtDecode(token)));
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 100);
    });
}
