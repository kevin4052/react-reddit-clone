import React, { Component } from 'react'
import CommentBox from './CommentBox'

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: props.userName,
            content: props.content
        }
    }
    render(props) {
        // const { userName, content } = props;

        return (
            <li>
            <div className="main-post">
                    <h3>userName</h3>
                    <p>content</p>
                    <div className="comment">
                        <CommentBox onSubmit={() => this.onCommentSubmit} />
                    </div>
                </div>                
            </li>
        )
    }
}

export default Comment;
