import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.scss';
import BalancePage from './pages/BalancePage';
import HomePage from './pages/HomePage';
import WithDrawPage from './pages/WithDrawPage';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<header className='App-header'>
					<ul className='ul-styles'>
						<li className='li-styles'>
							<NavLink className='App-link' to='/'>
								Home Page
							</NavLink>
						</li>
						<li className='li-styles'>
							<NavLink className='App-link' to='/balance'>
								Balance Page
							</NavLink>
						</li>
						<li className='li-styles'>
							<NavLink className='App-link' to='/withdraw'>
								Withdraw Page
							</NavLink>
						</li>
					</ul>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/balance' element={<BalancePage />} />
						<Route path='/withdraw' element={<WithDrawPage />} />
					</Routes>
				</header>
			</div>
		</BrowserRouter>
	);
}

export default App;
