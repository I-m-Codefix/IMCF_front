import React from 'react';
import { Button } from "react-bootstrap";

export default function ButtonComponent({ customText }) {
    const label = "test";
    const text = customText;
    return (
        <div>
            <Button> { label } </Button>
            { text }
        </div>
    );
}