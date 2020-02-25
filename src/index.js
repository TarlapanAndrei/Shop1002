import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {store, persistore } from './redux/store';
import { persistGate } from 'redux-persist/integration/react';

ReactDOM.render(
<Provider store={store}>
 <BrowserRouter>
 <persistGate persistore={persistore}>
<App />
 </persistGate>
</BrowserRouter>
</Provider>
, document.getElementById('root'));

