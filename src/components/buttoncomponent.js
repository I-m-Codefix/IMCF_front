import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";
import "../styles/Components/buttonComponent.scss";

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

const ButtonComponent = ({ btn_text, btn_link }) => {
    return (
        <div style={divStyle}>
            <Button style={btnStyle} href={btn_link}> {btn_text} </Button>
        </div>
    );
}

ButtonComponent.propsTypes = {
    btn_text: PropTypes.string.isRequired,
    btn_link: PropTypes.string
}

ButtonComponent.defaultProps = {
    btn_text: '대체 텍스트',
    btn_link: '/'
}

export default ButtonComponent;