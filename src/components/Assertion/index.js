import { h } from 'preact';
import style from './style';

const Assertion = ({ props }) => (
	<div class={style.assertion}>
		<p>Assertion</p>
		<div class={style.assertion}>test: { props.test || 'TestCriterion' }</div>
		{/* <div class={style.assertion}>assertedBy: { props.assertedBy }</div> */}
		<div class={style.assertion}>subject: { props.subject || 'TestSubject' }</div>
		<div class={style.assertion}>result: { props.result && props.result.outcome || 'TestResult' }</div>
		<div class={style.assertion}>
			Test > subject:Sample
			<div class={style.assertion}>
				Sample Result
			</div>
		</div>
	</div>
);

export default Assertion;
