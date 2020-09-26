import React, { Component } from 'react';
import CommentBox from './CommentBox';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: props.userName,
            content: props.content,
            comments: []
        }
    }

    onCommentReply = async (comment) => {
        console.log("comment post", {comment});

        await this.setState(state => {
            const comments =  state.comments.concat(comment);
            return {comments}
        });

        console.log(">>>> comment of comment");
        console.log(this.state);
    }
    
    render() {

        return (
            <li>
                <div className="main-post">
                    <h3>{this.state.userName}</h3>
                    <p>{this.state.content}</p>
                    <div className="comment">
                        <CommentBox onSubmit={this.onCommentReply} />
                    </div>
                </div>
                <ul>
                    {this.state.comments.map((comment) => 
                        <Comment key={comment.id} userName={comment.userName} content={comment.value} />
                    )}
                </ul>             
            </li>
        )
    }
}

export default Comment;
