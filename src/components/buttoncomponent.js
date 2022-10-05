import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";
import "../styles/Components/buttonComponent.scss";

const divStyle = {
    width: "100%",
    height: "100%",
    padding: "0 10px"
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

const ButtonComponent = ({ btn_text, btn_link, onClick, style }) => {
    return (
        <div style={divStyle}>
            <Button style={btnStyle(style)} href={btn_link} onClick={onClick}> {btn_text} </Button>
        </div>
    );
}

ButtonComponent.propsTypes = {
    btn_text: PropTypes.string.isRequired,
    btn_link: PropTypes.string,
    onClick: PropTypes.func
}

ButtonComponent.defaultProps = {
    btn_text: '대체 텍스트',
    //btn_link: ''
}

export default ButtonComponent;