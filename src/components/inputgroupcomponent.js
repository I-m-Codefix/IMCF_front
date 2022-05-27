import React from 'react';
import { FormControl, InputGroup } from "react-bootstrap";
import _variables from "../styles/_variables.scss";

export default function InputGroupComponent({ props }) {
    const label = props;
    return (
        <InputGroup className="mb-3">
            <FormControl
                placeholder = { label }
                aria-label = "Username"
                aria-describedby = "basic-addon1"
            />
        </InputGroup>
    )
}