import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function HomePage() {
	const balance = useSelector((state) => state.balanceReducer.balance);
	const loan = useSelector((state) => state.loanReducer.loan);
	const dispatch = useDispatch();
	function applayLoanHandler() {
		dispatch({ type: 'APPLAY' });
	}
	return (
		<div>
			<h1>Home Page</h1>
			<h2>Balance: {balance}</h2>
			<h2>{loan ? 'Loan Applied' : 'Loan Needed'}</h2>
			<button onClick={applayLoanHandler}>Applay for loan</button>
		</div>
	);
}

export default HomePage;
