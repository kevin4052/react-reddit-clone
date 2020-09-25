import React, { Component } from 'react'
import CommentBox from './CommentBox'
import Comment from './Comment'
import './Post.css'

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                {
                    id: "test12",
                    userName: "test",
                    content: "test comment"
                }
            ]
        };
    }

    onCommentSubmit(comment) {
        // this.setState({
        //     comments: this.state.comments.push(comment)
        // })
        console.log(">>>> post")
    }

    render() {
        return (
            <div className="container">
                <div className="main-post">
                    <h3>original post</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar 
                    sapien a mollis dignissim. Donec nisi sapien, dapibus vel leo non, feugiat 
                    tincidunt ipsum..</p>
                    <div className="comment">
                        <CommentBox onSubmit={() => this.onCommentSubmit} />
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
