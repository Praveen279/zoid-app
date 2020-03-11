import React from 'react';
import ReactDom from 'react-dom';

const CardForm = ({ cardNumber, onUpdate }) => (
    <div>
        <div>Card #: {cardNumber}</div>
        <button onClick={() => onUpdate()}>Update!</button>
    </div>
);

ReactDom.render(<CardForm {...global.xprops} />, document.getElementById('form'));