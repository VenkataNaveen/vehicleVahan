//import Cookies from 'js-cookie';
import actions from './actions';

const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr } = actions;

const login = (userDetails) => {
  return async dispatch => {
    try {
      dispatch(loginBegin());
      setTimeout(() => {
       // Cookies.set('logedIn', true);
        localStorage.setItem("userInfo",JSON.stringify(userDetails));
        return dispatch(loginSuccess(userDetails));
      }, 1000);
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const logOut = () => {
  return async dispatch => {
    try {
      dispatch(logoutBegin());
      //Cookies.remove('logedIn');
      localStorage.clear();
      localStorage.removeItem("userInfo");
      dispatch(logoutSuccess(null));
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

export { login, logOut };
