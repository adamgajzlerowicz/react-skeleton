require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory} from 'react-router';

var Container = React.createClass({
    render() {
        return <div class="container">
            <Link to='foo' >Link1</Link>
            <Link to='bar' >Link2</Link>

            {this.props.children}
        </div>
    }
});
var Child1 = React.createClass({
	render(){
		return  (
			<div>
                Child 1
			</div>
		)
	}
});

var Child2 = React.createClass({
	render(){
		return  (
			<div>
				Child 2
			</div>
		)

	}
});

var routes = (
	<Router history={browserHistory}>

        <Route path="/" component={Container}>
            <Route path="foo" component={Child2}/>
            <Route path="bar" component={Child1} />
        </Route>

    </Router>
);

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
