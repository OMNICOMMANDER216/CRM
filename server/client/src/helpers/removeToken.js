export default function(token) {
    localStorage.removeItem('jwtToken');
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 100);
    });
}
