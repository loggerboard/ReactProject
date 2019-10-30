import React, { Component } from 'react';
//import MyPic from './logoComp.svg';

export default class Counter extends Component {
    constructor(){
        super();
        this.incrementHandler = this.incrementHandler.bind(this);//it will return reference of current object.
        //to bind this object with incrementHandler method.
        this.decrementHandler = this.decrementHandler.bind(this);
    }
    state = {
        count : 0,
        //tags : ['tag1', 'tag2', 'tag3']
    };
    customStyle = {
        fontSize : 15,
        fontWeight : 'BOLD'
    };

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags available!!</p>;
        return <ul>
            {this.state.tags.map(tag => <li>{tag}</li>)}
        </ul>;
    }
    
    incrementHandler(){
        this.setState({count : this.state.count + 1});
    }

    decrementHandler(){
        this.setState({count : this.state.count === 0 ? 0 :this.state.count - 1});
    }

    render() { 
        return (
        <div>
            <span style={this.customStyle} className={this.getBadgeClass()}>{this.formatCount()}</span>
            <button onClick={this.incrementHandler} className="btn btn-secondary bt-sm m-2 glyphicon glyphicon-plus">Inc</button>
            <button onClick={this.decrementHandler} className="btn btn-secondary bt-sm m-2 glyphicon glyphicon-minus">Dec</button>
        </div>
        );
    }
/*          Image and list iteration commenting 
            <div>
                {this.state.tags.length === 0 && 'Please create a new tag.'}
                {this.renderTags()}
            </div>
            <img src={MyPic} className="App-logo" alt="MyPic"></img>
*/
    getBadgeClass() {
        let customBadgeClass = "badge m-2 badge-";
        customBadgeClass += (this.state.count === 0) ? "warning" : "primary";
        return customBadgeClass;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}