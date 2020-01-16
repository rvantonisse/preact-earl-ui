import { h, createRef } from 'preact';
// import style from './style';

import data from '../../data/assertions.js';
import Assertion from '../../components/Assertion';

const Assertions = () => (
	<main>
		<h1>Assertions</h1>
		{ renderAssertions(data) }
	</main>
);

function renderAssertions(data) {
	const assertions = [];
	const dataCount = data.length;
	let assertion;
	let ref;

	for (let i = 0; i < dataCount; i++) {
		ref = createRef();
		assertion = data[i];

		assertions.push(<Assertion ref={ref} props={assertion} />);
	}

	return assertions;
}

export default Assertions;
