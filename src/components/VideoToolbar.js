import React from "react"
import { BsArrowReturnLeft, BsFillHouseFill } from "react-icons/bs";

const toolbarBackground = {
    position: "absolute",
    top: 0,
    padding: "8px",
    background: "rgb(0, 0, 0, 0.75)",
    width: "100%",
    height: "48px"
}

const toolbarButton1 = {
    position: "absolute",
    top: "8px",
    left: "8px",
    width: "32px",
    height: "32px",
    padding: "0"
}

const toolbarButton2 = {
    position: "absolute",
    top: "8px",
    right: "8px",
    width: "32px",
    height: "32px",
    padding: "0"
}

export default function VideoToolbar() {

    const go = (route) => {
        if (route === "/back")
            window.history.back();
        else
            window.location.replace(route);
    }

    return (
        <div style={toolbarBackground}>
            <div style={toolbarButton1} onClick={() => go("/back")}>
                <BsArrowReturnLeft size="32" color="white" />
            </div>
            <div style={toolbarButton2} onClick={() => go("/main")}>
                <BsFillHouseFill size="32" color="white" />
            </div>
        </div>
    )
}