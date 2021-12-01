import React from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { App } from 'src/app';
import { Providers } from 'src/providers';

render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
