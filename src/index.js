import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import state from './redux/state';
import { addPost } from './redux/state';


import { BrowserRouter } from 'react-router-dom';

addPost("React")

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} addPost={addPost}/>
    </BrowserRouter>
  </React.StrictMode>
);
