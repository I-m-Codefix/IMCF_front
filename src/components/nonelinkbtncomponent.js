import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const divStyle = {
    width: "100%",
    height: "100%",
    padding: "0 10px"
}

const btnStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black"
}

const asd = 123;

function reducer(state = asd, action){
    return state
}

let store = createStore(reducer);

const nonelinkbtnComponent = ({ btn_text, btn_link }) => {
    return (
        <div style={divStyle}>
            <Button style={btnStyle} href={btn_link}> {btn_text} </Button>
        </div>
    );
}