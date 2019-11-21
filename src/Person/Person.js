import React from 'react';

const Person = (props) => {
    return (
        <div onClick={props.click}>
            <p>My name is {props.name} and age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default Person;
