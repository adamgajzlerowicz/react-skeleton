import React from 'react';
import Call from '../api/call';
const _ = require('underscore');
var Topics = React.createClass({
    getInitialState:function(){
        return {
            topics: []
        }
    },
    componentWillMount:function(){
        var that = this;
        Call.get('topics/defaults').then(data=>{
            this.setState({
                topics:data.data
            });
        })
    },
    render:function(){
        return <div>
            Topic List:
            {this.renderTopics()}
        </div>
    },
    renderTopics:function(){
        return this.state.topics.map(function(topic){
            return <li>
                {topic.description}
            </li>
        })
    }
});

export {Topics}