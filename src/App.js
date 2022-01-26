import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';
import { Button } from '../src/components/Button';
import { Display } from './components/Display';
import Buttons from './buttons.json';

const App = () => {
	const [result, setresult] = useState([0]);

	const submit = (symbol) => {
		if (symbol === 'clear') {
			setresult([0]);
		} else if (symbol === '=') {
			let sum = evaluate(result.join(''));
			setresult([sum]);
		} else {
			let temp = [...result];
			if (temp[0] === 0) {
				temp.shift();
			}
			setresult([...temp, symbol]);
		}
	};

	return (
		<div className="wrapper">
			<Display symbol={setresult} />
			{Buttons.map((item, index) => {
				return <Button key={index} symbol={item} handleClick={submit} />;
			})}
		</div>
	);
};

export default App;
