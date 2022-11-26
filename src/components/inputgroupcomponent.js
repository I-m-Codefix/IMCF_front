import { FormControl, InputGroup } from "react-bootstrap";
import "../styles/Components/inputComponent.scss"

 const InputGroupComponent = (props) => {
    return (
        <InputGroup className="mb-3">
            <FormControl
                type= { props.type }
                placeholder = { props.placeholder }
                aria-label = "Username"
                aria-describedby = "basic-addon1"
            />
        </InputGroup>
    )
}

InputGroupComponent.defaultProps = {
    placeholder: '',
    type: 'text'
}

export default InputGroupComponent;