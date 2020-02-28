import { h } from 'preact';
import style from './style';

const Assertion = ({
	assertedBy,
	created,
	mode,
	modified,
	result,
	subject,
	test
}) => (

	<article class={style.assertion}>
		<header>
			<h2>Assertion</h2>
			<div>
				<p>{ mode ? `${mode} ` : '' }assertedBy: { assertedBy }</p>
				{ created && (
					<p>
						Created: <time dateTime={created} title={created}>{created}</time>
					</p>
				) }
				{ modified && (
					<p>
						Modified: <time dateTime={modified} title={modified}>{modified}</time>
					</p>
				) }
			</div>
		</header>

		<div>
			<div>
				<p>subject: { subject || 'TestSubject' }</p>
				<p>details</p>
			</div>

			<div>
				<p><strong>test</strong>: { test ? test.title || test : 'undefined' }</p>
				<p>{ test && test.description || '' }</p>
			</div>

			<div>
				<p>result: { result && result.outcome || 'TestResult' }</p>
				<p>Description</p>
			</div>
		</div>
	</article>
);

function readAssertion() {

}

function createAssertion() {

}

function updateAssertion() {

}

export default Assertion;
