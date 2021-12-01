import React, { Fragment } from 'react';
import { ThemeProvider, vars } from 'src/theme';
import { GlobalStyles } from 'src/theme/GlobaleStyle';
import { StoreContext } from 'storeon/react';
import { store } from 'src/store';

export const Providers = (props) => {
  return (
    <ThemeProvider theme={vars}>
      <Fragment>
        <GlobalStyles />
        <StoreContext.Provider value={store}>{props.children}</StoreContext.Provider>
      </Fragment>
    </ThemeProvider>
  );
};
