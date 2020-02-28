import { h, createRef } from 'preact';
// import style from './style';

import data from '../../data/assertions.js';
import Assertion from '../../components/Assertion';
import BaseLayout from '../../components/layout/BaseLayout';

const Assertions = () => (
	<BaseLayout>
		<h1>Assertions</h1>
		{ renderAssertions(data) }
	</BaseLayout>
);

function renderAssertions(data) {
	const assertions = [];
	const dataCount = data.length;
	let assertion;
	let ref;

	for (let i = 0; i < dataCount; i++) {
		ref = createRef();
		assertion = data[i];

		assertions.push(
			<Assertion
				ref={ref}
				{...assertion}
			/>
		);
	}

	return assertions;
}

export default Assertions;
