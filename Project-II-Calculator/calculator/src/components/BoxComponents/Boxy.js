import React from 'react';
import './Boxy.css';

const Boxy = (props) => {
    console.log(props)
    return (
        <div className={props.box.boxClass}>
            {props.box.content}
        </div >
    );
}

export default Boxy;