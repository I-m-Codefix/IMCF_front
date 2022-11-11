import React from "react"

const toolbarBackground = {
    position: "absolute",
    top: 0,
    padding: "8px",
    background: "rgba(0, 0, 0, 0.75)",
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
            window.location.href(route);
    }

    return (
        <div style={toolbarBackground}>
            <div style={toolbarButton1} onClick={go("/back")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-return-left text-white" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                </svg>
            </div>
            <div style={toolbarButton2} onClick={go("/main")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-house-door-fill text-white" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                </svg>
            </div>
        </div>
    )
}