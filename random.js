var atob = require('atob');

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

console.log(parseJwt('ya29.a0ARrdaM-UahRBaXNGkNLHALI1Vozle4JAxAGCIuSWH4wj34Bo5SUCdaddyCNiTZIodiaZ8_NQcNMz6-NKWp5aLYe9XWfLQNTE9Vv1BBYlQQBh9Tyy3k7M3smQ87-dFXJcDlLgAUNq8ZGhFz-VPYskGK4Y1cBz'));
