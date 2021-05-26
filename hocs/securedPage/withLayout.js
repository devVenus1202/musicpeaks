import React from 'react';
import { PageTransition } from 'next-page-transitions';
import Layout from '../../containers/App/layout';

export default ComposedComponent => props => (
  <Layout>
    <PageTransition classNames="page-transition" timeout={1000}>
      <ComposedComponent {...props} key={props.url.pathname} />
    </PageTransition>
    <style jsx global>
      {`
        .page-transition-enter {
          opacity: 0;
          transform: translate3d(0, 500px, 0);
        }
        .page-transition-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity 500ms, transform 1000ms;
        }
      `}
    </style>
  </Layout>
);
