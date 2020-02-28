import { h, Component, createRef } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';

import Assertions from '../routes/assertions';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	handleScroll = event => {
		const { previousScrollY, stickyHeader } = this.state;
		const { scrollY } = window;

		this.setState({ previousScrollY: scrollY });
		console.log(previousScrollY, scrollY, stickyHeader);

		if (
			!stickyHeader &&
      scrollY > this.headerHeight &&
      scrollY < previousScrollY
		) {
			this.setState({ stickyHeader: true });
		}

		if (
			stickyHeader &&
      scrollY > previousScrollY ||
      scrollY === 0
		) {
			this.setState({ stickyHeader: false });
		}

	};

	constructor() {
		super();

		this.ref = createRef();
		this.state = {
			previousScrollY: window.scrollY,
			stickyHeader: false
		};
	}

	componentDidMount() {
		this.headerHeight = this.ref.current.firstElementChild.scrollHeight;

		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	render(props, { stickyHeader }) {

		return (
			<div id="app" style={{ paddingTop: stickyHeader ? `${this.headerHeight}px` : '0' }} ref={this.ref}>
				<Header sticky={stickyHeader} />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Assertions path="/assertions" />
				</Router>
			</div>
		);
	}
}
