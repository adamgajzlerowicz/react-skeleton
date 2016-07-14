import React from 'react';
import { Router, Route, Link, browserHistory} from 'react-router';
import { Container } from './components/container';

let Call = require('./api/call');

Call('topics/defaults').then((data)=>{
    console.log(data);
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



var Routes = (
    <Router history={browserHistory}>

        <Route path="/" component={Container}>
            <Route path="foo" component={Child1} />
            <Route path="bar" component={Child2}/>
        </Route>

    </Router>
);

export {Routes}
