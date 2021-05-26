import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs/react';
import Pagination from '@components/uielements/pagination';
import { ThemeProvider } from 'styled-components';
import theme from '@config/themes';

storiesOf('UI Elements', module).add('Pagination', () => {
  const total = number('total', 10);
  const showTotal = total => {
    return `${total} copies in Total`;
  };

  return (
    <ThemeProvider theme={theme}>
      <Pagination size="small" total={total} showTotal={showTotal} />
    </ThemeProvider>
  );
});
