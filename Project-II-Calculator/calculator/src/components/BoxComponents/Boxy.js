import React from 'react';
import './Boxy.css';

const Boxy = (props) => {
    console.log(props)
    return (
        <div className={props.box.boxClass}>
            <p>{props.box.content}</p>
        </div >
    );
}

export default Boxy;