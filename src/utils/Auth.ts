import jwtDecode, { JwtPayload } from 'jwt-decode';
import { isEmpty } from 'lodash';

export interface decodedUser extends JwtPayload {
  exp: number;
  iat: number;
  iss: string;
  jti: string;
  nbf: number;
  prv: string;
  sub: string;
}

const getToken = () => {
  const token = localStorage.getItem('accesstoken');
  if (token) {
    return token;
  }
  return null;
};

function isAuthenticated() {
  try {
    const decodedToken = getDecodedJwt();
    if (!isEmpty(decodedToken)) {
      const { exp } = decodedToken;
      const currentTime = Date.now() / 1000;
      if (exp) {
        return exp > currentTime;
      }
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
}

const removeToken = () => {
  localStorage.removeItem('accesstoken');
};

const setToken = (token: string) => {
  localStorage.setItem('accesstoken', token);
};

function getDecodedJwt(tkn = ''): decodedUser {
  try {
    const token = getToken();
    const tk = token || tkn;
    const decoded = jwtDecode<decodedUser>(tk);
    return decoded;
  } catch (error) {
    return {} as decodedUser;
  }
}

export const Auth = {
  isAuthenticated,
  getDecodedJwt,
  removeToken,
  setToken,
  getToken,
};
