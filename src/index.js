import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CookiesProvider } from 'react-cookie';

import 'bootstrap/dist/css/bootstrap.css';
import "./styles/Pages/index.scss"

import App from './App';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode> // 이거 땜에 로그에 2번씩 찍힘. 개빡침.
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </QueryClientProvider>
  //</React.StrictMode>
);

export default App;