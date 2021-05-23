import React, { useState } from 'react'
// import answers from './answers'
// is there a way to include answers in a separate file and pass the values in? 
// for some reason it wouldn't seem to work.
import './EightBall.css'

const randomMsg = (arr) => {
    const random =  Math.floor(Math.random() * arr.length);
    return arr[random];
}

const EightBall = (props) => {
    const [color, setColor] = useState("black");
    const [msg, setMessage] = useState("Think of a Question")

    const handleClick = () => {
        const {msg, color} = randomMsg(props.answers);
        setMessage(msg);
        setColor(color);
    }
    return (
        <div 
            className="EightBall" 
            onClick={handleClick} 
            style= { {backgroundColor: color} }>
            <p>{msg}</p>
        </div>
    );
}


EightBall.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ]
};

export default EightBall;
