import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function WithDrawPage() {
	const balance = useSelector((state) => state.balance);
	const dispatch = useDispatch();
	function onDepositHandle() {
		dispatch({ type: 'WITHDRAW', payload: 10 });
	}
	return (
		<div>
			<h1>Witdraw page</h1>
			<h2>Balance: {balance}</h2>
			<button onClick={onDepositHandle}>Withdraw</button>
		</div>
	);
}

export default WithDrawPage;
