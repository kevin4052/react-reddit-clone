import React, { Component } from 'react';
import './CommentBox.css';

class CommentBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: "",
            userName: "guest",
            id: ""
        }
    }

    onChange = (event) => {
        this.setState({value: event.target.value})
    }

    onReply = async () => {
        // console.log('>>>> commentbox');
        const randomNum = Math.random().toString(2);

        await this.setState({
            id: (this.state.value.replace('/ /s+/g', "").length.toString(2) + randomNum),
            userName: (this.state.userName + this.state.value.length)
        });

        const commentState = this.state;
        // console.log({commentState})
        this.setState({value: ""})

        this.props.onSubmit(commentState);
    }

    render(){
        return (
            <div className="comment-box">
                <textarea value={this.state.value} onChange={this.onChange}/>
                <button onClick={this.onReply}>reply</button>
            </div>
        )
    }
}

export default CommentBox;
