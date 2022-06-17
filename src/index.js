import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import todoStore from './store/todoStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store= {todoStore}> 
     <App />
    </Provider>
  </React.StrictMode>
);
//전역적으로 뿌려줄 수 있게 provider를 사용해서 넣어줬다.
