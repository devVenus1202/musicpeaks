import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { now as _now } from 'lodash';
import AppProvider from '@components/appContext';
import withApollo from '../lib/withApollo';
import { getCookie } from '../helpers/session';
import redirect from '../helpers/redirect';
import { clearCookie } from '../helpers/auth';

class MyApp extends App {
  static async getInitialProps({ ctx }) {
    const isExpiredToken = (issuedAt, maxAge) => {
      const currentAge = (_now() - issuedAt) / 1000;
      return currentAge > maxAge;
    };
    if (ctx) {
      let composedInitialProps = {};
      let isLoggedIn = false;
      if (this.getInitialProps) {
        // composedInitialProps = await this.getInitialProps(ctx);
        isLoggedIn = getCookie('id_token', ctx.req) ? true : false;
        const issuedAt = getCookie('issued_at', ctx.req);
        const maxAge = Number(getCookie('token_max_age', ctx.req));
        if (isExpiredToken(issuedAt, maxAge)) {
          clearCookie();
          isLoggedIn = false;
        }
        if (!isLoggedIn && ctx.pathname !== '/') {
          redirect(ctx, '/');
        } else if (isLoggedIn && ctx.pathname === '/') {
          redirect(ctx, '/dashboard/profile');
        }
      }

      const url = {
        pathname: ctx.pathname,
        path: ctx.asPath,
        query: ctx.query,
      };
      composedInitialProps = {
        // ...composedInitialProps,
        isLoggedIn,
        url,
        user: getCookie('auth_user', ctx.req),
        userInfo: {
          id: getCookie('auth_user', ctx.req),
          name: decodeURIComponent(getCookie('auth_username', ctx.req)),
          avatar: getCookie('user_avatar', ctx.req),
          headerImage: getCookie('user_header', ctx.req),
        },
        menu: { current: ctx.pathname, collapsed: false },
      };
      return composedInitialProps;
    }

    const issuedAt = getCookie('issued_at');
    const maxAge = Number(getCookie('token_max_age'));
    if (isExpiredToken(issuedAt, maxAge)) {
      clearCookie();
      redirect(ctx, '/');
    }
    return ctx;
  }

  componentDidCatch(error, errorInfo) {
    console.log('CUSTOM ERROR HANDLING', error);
    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps, apolloClient, url, user, menu, userInfo } = this.props;
    const newProps = {
      ...pageProps,
      url,
      user,
      userInfo,
    };

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <AppProvider user={user} userInfo={userInfo} menu={menu}>
            <Component {...newProps} />
          </AppProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
