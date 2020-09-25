import React from 'react'
import './CommentBox.css'

const CommentBox = (props) => {

    const onReply = (event) => {
        // event.preventDefault();
        console.log('>>>> commentBox')
        // console.log({props})
        const {onSubmit} = props;

        onSubmit('from comment box')
    }

    return (
        <div className="comment-box">
            <textarea></textarea>
            <button onClick={() => onReply()}>reply</button>
        </div>
    )
}

export default CommentBox;
