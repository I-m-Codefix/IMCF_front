import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";
import useStore from '../store/manager';
import "../styles/Components/buttonComponent.scss";

const divStyle = {
    width: "100%",
    height: "100%",
    padding: "0 15px"
}

const btnStyle = (style) => {
    if (style) {
        return style;
    }
    return {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black"
    }
}

const ButtonComponent = ({ btn_text, btn_link, onClick, style, keyword }) => {

    const policy = useStore(state => state.policy);

    if (keyword === 'policy') {
        return (
            <div style={divStyle}>
                <Button style={btnStyle(style)} href={btn_link} onClick={onClick} disabled={!policy}> {btn_text} </Button>
            </div>
        );
    } else {
        return (
            <div style={divStyle}>
                <Button style={btnStyle(style)} href={btn_link} onClick={onClick}> {btn_text} </Button>
            </div>
        );
    }
}

ButtonComponent.propsTypes = {
    btn_text: PropTypes.string.isRequired,
    btn_link: PropTypes.string,
    onClick: PropTypes.func
}

ButtonComponent.defaultProps = {
    btn_text: '대체 텍스트',
    btn_link: ''
}

export default ButtonComponent;