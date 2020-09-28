import React from 'react'

export default function Votes({count, onVote}) {

    const upVote = () => {
        onVote(1);
    }

    const downVote = () => {
        onVote(-1);
    }

    const divStyle = {
        display: 'flex',
    }

    return (
        <div style={divStyle}>
            <button onClick={() => upVote()}>Up vote</button>
            <p style={{margin: "0 1rem"}}> {count} </p>
            <button onClick={() => downVote()}>Down vote</button>            
        </div>
    )
}
