import "../styles/Components/buttonComponent.scss";

const divStyle = {
    width: "100%",
    height: "100%",
    padding: "0 100px"
}

const TabContentTitle = ({tabs}) => {
    return (
        <div style={divStyle}>{tabs.name}</div>
    );
}

export default TabContentTitle;