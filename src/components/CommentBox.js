import React, { Component } from 'react';
import './CommentBox.css';

class CommentBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            content: "",
            userName: "guest",
            id: ""
        }
    }

    onChange = (event) => {
        this.setState({content: event.target.value});
    }

    onReply = async () => {
        const randomNum = Math.random().toString(2);
        const userId = this.state.content.replace('/ /s+/g', "").length.toString(2) + randomNum;
        const newUserName = this.state.userName + this.state.content.length;
        
        await this.setState({
            id: userId,
            userName: newUserName
        });

        const commentState = this.state;
        this.setState({content: ""});
        this.props.onSubmit(commentState);
    }

    render(){
        return (
            <div className="comment-box">
                <textarea value={this.state.content} onChange={this.onChange}/>
                <button onClick={this.onReply}>reply</button>
            </div>
        )
    }
}

export default CommentBox;
