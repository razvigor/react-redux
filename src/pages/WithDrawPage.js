import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './button.scss';

function WithDrawPage() {
	const balance = useSelector((state) => state.balanceReducer.balance);
	const loan = useSelector((state) => state.loanReducer.loan);
	const dispatch = useDispatch();
	function onWithDrowHandle() {
		dispatch({ type: 'WITHDRAW', payload: 10 });
	}
	return (
		<div>
			<h1>Withdraw page</h1>
			<h2>Balance: {balance}</h2>
			<button onClick={onWithDrowHandle}>Withdraw</button>
			<h2>{loan ? 'Loan Applied' : 'Loan Needed'}</h2>
		</div>
	);
}

export default WithDrawPage;
