import { h } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';

const Header = ({ sticky = false }) => {

	const classList = [
		style.header,
		(sticky ? style.sticky : '')
	].join(' ').trim();

	return (
		<header class={classList}>
			<h1>EARL UI</h1>
			<nav>
				<Link activeClassName={style.active} href="/">Home</Link>
				<Link activeClassName={style.active} href="/assertions">Assertions</Link>
			</nav>
		</header>
	);
};

export default Header;
