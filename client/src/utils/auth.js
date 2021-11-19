// We use this to decode a token, then we recevce the user's information out of 'jwt-decode', this is so cool.
import decode from 'jwt-decode';

// this is the point where we create a new class to instantiate for the user, and it is working. 
class AuthService {
  // this is helpfule to know right here, get user data
  getProfile() {
    return decode(this.getToken());
  }

  // check if user is logged in, yeappp (works).
  loggedIn() {
    // Checks if there is a saved token and it's still valid, it is and recheked (i think).
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); 
  }

  // check if token is expired but It is not 11.7.21. 
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();
