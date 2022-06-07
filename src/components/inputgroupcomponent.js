import { FormControl, InputGroup } from "react-bootstrap";
import "../styles/Components/inputComponent.scss"

export default function InputGroupComponent(props) {
    return (
        <InputGroup className="mb-3">
            <FormControl
                placeholder = { props.placeholder }
                aria-label = "Username"
                aria-describedby = "basic-addon1"
            />
        </InputGroup>
    )
}