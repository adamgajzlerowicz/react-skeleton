var React = require('react');
import { Router, Route, Link, browserHistory} from 'react-router';
import {Topics} from './topics'
var Container = React.createClass({
    render() {
        return <div class="container">
            <div className="header">
                <Link to='/' >Home</Link>
                <Link to='foo' >Link1</Link>
                <Link to='bar' >Link2</Link>
            </div>
            {this.content()}
        </div>
    },
    content: function(){
        if(this.props.children)
            return this.props.children;
        return <Topics/>;
    }
});

export {Container}