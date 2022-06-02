import React from 'react';
import { Button } from "react-bootstrap";
import "../styles/Components/buttonComponent.scss";

export default function ButtonComponent({ props }) {
    const label = props;
    // const css = {
    //     color:_variables.extra_color
    // }
    return (
        <div>
            <Button> {label} </Button>
        </div>
    );
}