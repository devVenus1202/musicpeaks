// import { Component } from 'react';
// import Router from 'next/router';
// import nextCookie from 'next-cookies';
// import cookie from 'js-cookie';
import { now as _now } from 'lodash';
import { getCookie, setCookie, removeCookie } from './session';

import { QuerySignIn } from '../graphql/auth';
import { QueryGetUserInfo } from '../graphql/user';

export const clearCookie = async () => {
  removeCookie('id_token');
  removeCookie('auth_user');
  removeCookie('auth_username');
  removeCookie('token_max_age');
  removeCookie('issued_at');

  removeCookie('user_avatar');
  removeCookie('user_header');
};

export const setUserCookie = async ({ key, uid, name, tokenAge }) => {
  setCookie('id_token', key);
  setCookie('auth_user', uid);
  setCookie('auth_username', name);
  setCookie('token_max_age', tokenAge); //
  setCookie('issued_at', _now());
  setCookie('user_avatar', '../../static/image/default-avatar.jpg');
  setCookie('user_header', '../../static/image/default-header.jpg');
};

export const getUserAvatar = async (client, uid) => {
  try {
    const userData = await client.query({
      query: QueryGetUserInfo,
      variables: {
        uid: String(uid),
      },
    });
    const {
      data: {
        userById: {
          reverseUidProfile: {
            entities: [{ image, headerImage }],
          },
        },
      },
    } = userData;
    setCookie('user_avatar', image.url);
    setCookie('user_header', headerImage.url);
  } catch (err) {
    console.log(err);
  }
};

/**
  loginHandler
 */
export const login = async (client, username, password) => {
  try {
    clearCookie();

    const data = await client.query({
      query: QuerySignIn,
      variables: {
        username,
        password,
      },
    });
    console.log('login response: ', data);
    const {
      data: {
        login: { error },
      },
    } = data;

    if (error !== 'null') {
      return { error, userInfo: null };
    }

    const {
      data: {
        login: {
          key,
          account: { uid, name },
          expire_at: expireAt,
          issued_at: issuedAt,
        },
      },
    } = data;
    setUserCookie({ key, uid, name, tokenAge: expireAt - issuedAt });
    await getUserAvatar(client, uid);

    return { error: null, userInfo: { uid, uname: name } };
  } catch (error) {
    console.log(error);
    clearCookie();
    return { error: 'Login is failed. Please try again!', userInfo: null };
  }
};

export const logout = () => {
  clearCookie();
  window.localStorage.setItem('logout', Date.now());
};

export const isExpiredToken = () => {
  const issuedAt = Number(getCookie('issued_at'));
  const maxAge = Number(getCookie('token_max_age'));
  const currentAge = (_now() - issuedAt) / 1000;
  return currentAge > maxAge;
};
