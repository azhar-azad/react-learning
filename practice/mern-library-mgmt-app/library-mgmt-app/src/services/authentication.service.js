const login = (user) => {
  if (user.type === 'ADMIN') {
    sessionStorage.setItem('authenticatedUser', user.username);
    sessionStorage.setItem('userType', user.type);
    window.location = '/admin/home';
  }
  else if (user.type === 'USER') {
    sessionStorage.setItem('authenticatedUser', user.username);
    sessionStorage.setItem('userType', user.type);
    window.location = '/books';
  }
  else {
    // TODO: Implement what should happen if userType is neither ADMIN nor USER
    console.log('[authentication.service.js] ::: Incomplete block');
    window.location = '/error';
  }
};

const isLoggedIn = () => {
  let username = sessionStorage.getItem('authenticatedUser');
  return !(username === null);
};

const isAdmin = () => {
  let userType = sessionStorage.getItem('userType');
  return userType === 'ADMIN';
};

const getUsername = () => {
  return sessionStorage.getItem('authenticatedUser');
};

const logout = () => {
  sessionStorage.removeItem('authenticatedUser');
  sessionStorage.removeItem('userType');
};

const authServices = {
  login,
  isLoggedIn,
  isAdmin,
  getUsername,
  logout
}

module.exports = {
  authServices
};