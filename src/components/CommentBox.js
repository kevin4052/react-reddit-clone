import React, { Component } from 'react'
import './CommentBox.css'

class CommentBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: "comment"
        }
    }

    onChange = (event) => {
        this.setState({value: event.target.value})
    }

    onReply = () => {
        console.log('>>>> commentbox')
        this.props.onSubmit(this.state.value);
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
