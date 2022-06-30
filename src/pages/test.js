import { useState } from "react";
import { Nav } from "react-bootstrap";
import TabContentTitle from "../components/tabcontenttitle";
import LayoutComponent from "../layouts/layoutComponent";

function TabContent(props) {
  if (props.clickedTab === 0) {
    return (<TabContentTitle className="mt-5" />);
  } else {
    return (<TabContentTitle className="mt-5" />);
  }
}

function Test() {
  let [clickedTab, setClickedTab] = useState(0);
  return (
    <div className="Test">
      <Nav className="mt-5" variant="tabs" defaultActiveKey="0">
        <Nav.Item>
          <Nav.Link eventKey="0" onClick={()=>{setClickedTab(0)}}>상세정보</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="1" onClick={()=>{setClickedTab(1)}}>리뷰</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent clickedTab={clickedTab} />
    </div>
  );
}

export default Test;