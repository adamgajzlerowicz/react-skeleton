import React from 'react';
import Reflux from 'reflux';
import TopicStore from '../stores/topics-store';
import Actions from '.././actions';

var Topics = React.createClass({
    mixins:[
        Reflux.listenTo(TopicStore, 'onChange')
    ],
    getInitialState:function(){
        return {
            topics: []
        }
    },
    componentWillMount:function(){
       Actions.getTopics();
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
    },
    onChange: function(event, topics){
        this.setState({
            topics: topics
        })
    }
});

export {Topics}