import React from 'react';
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


module.exports.routes = (
    <Router history={browserHistory}>

        <Route path="/" component={Container}>
            <Route path="foo" component={Child2}/>
            <Route path="bar" component={Child1} />
        </Route>

    </Router>
);
