import React, { Component } from 'react';
import CommentBox from './CommentBox';
import Comment from './Comment';
import Votes from './Votes'
import './Post.css';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            votes: 0
        };
    }

    onCommentSubmit = async (comment) => {
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
            <div className="container">
                <div className="main-post">
                    <div>
                        <h3>original post</h3>
                        <Votes onVote={this.onVote} count={this.state.votes} />
                    </div>                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar 
                    sapien a mollis dignissim. Donec nisi sapien, dapibus vel leo non, feugiat 
                    tincidunt ipsum..</p>
                    <div className="comment">
                        <CommentBox onSubmit={this.onCommentSubmit} />
                    </div>                    
                </div>
                <div>
                    <ul>
                        {this.state.comments.map((comment) => 
                            <Comment key={comment.id} userName={comment.userName} content={comment.content} />
                        )}
                    </ul>                    
                </div>
            </div>
        );
    };
};
