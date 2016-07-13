require("./../node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory} from 'react-router';
import {routes} from './routes';

export class App extends React.Component {
	render() {
		let part_message = 'foo bar blah';
		let message = `${part_message}`;
		return (
			<div>{message}</div>
		);
	}
}

ReactDOM.render(routes, document.querySelector("#myApp"));
