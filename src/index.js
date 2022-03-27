import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers } from 'redux';
import balanceReducer from './store/balanceReducer';
import { Provider } from 'react-redux';
import loanReducer from './loanReucer';

const store = createStore(
	combineReducers({
		balanceReducer,
		loanReducer,
	})
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
