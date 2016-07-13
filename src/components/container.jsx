var React = require('react');
import { Router, Route, Link, browserHistory} from 'react-router';

var Container = React.createClass({
    render() {
        return <div class="container">
            <div className="header">
                <Link to='foo' >Link1</Link>
                <Link to='bar' >Link2</Link>
            </div>

            {this.props.children}
        </div>
    }
});

export {Container}