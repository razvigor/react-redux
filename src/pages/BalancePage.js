import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as balanceActions from '../actions/balanceActions';
import './button.scss';

function BalancePage() {
	const balance = useSelector((state) => state.balanceReducer.balance);
	const loan = useSelector((state) => state.loanReducer.loan);
	const loading = useSelector((state) => state.balanceReducer.loading);
	const dispatch = useDispatch();
	function onDepositHandle() {
		dispatch(balanceActions.depositAsync());
	}
	return (
		<div>
			<h1>Balance Page</h1>
			{loading ? <h2>Saving....</h2> : <h2>Balance: {balance}</h2>}

			<button onClick={onDepositHandle}>Deposit</button>
			<h2>{loan ? 'Loan Applied' : 'Loan Needed'}</h2>
		</div>
	);
}

export default BalancePage;
