import React, { Component } from 'react';
import CommentBox from './CommentBox';
import Votes from './Votes';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: props.userName,
            content: props.content,
            votes: 0,
            comments: []
        }
    }

    onCommentReply = async (comment) => {
        await this.setState(state => {
            const comments =  state.comments.concat(comment);
            return {comments}
        });
    }

    onVote = (newVote) => {
        const newCount = this.state.votes + newVote;
        this.setState({
            votes: newCount
        });
    }
    
    render() {

        return (
            <li>
                <div className="main-post">
                    <div>
                        <h3>{this.state.userName}</h3>
                        <Votes onVote={this.onVote} count={this.state.votes} />
                    </div>
                    <p>{this.state.content}</p>
                    <div className="comment">
                        <CommentBox onSubmit={this.onCommentReply} />
                    </div>
                </div>
                <ul>
                    {this.state.comments.map((comment) => 
                        <Comment key={comment.id} userName={comment.userName} content={comment.content} />
                    )}
                </ul>             
            </li>
        )
    }
}

export default Comment;
