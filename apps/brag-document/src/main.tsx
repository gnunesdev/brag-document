import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { App } from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <div className={``}>
      <App />
    </div>
  </StrictMode>
);
