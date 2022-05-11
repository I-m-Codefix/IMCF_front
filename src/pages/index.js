import { Breadcrumb } from "react-bootstrap";

function Index() {
  return (
    <div className="App">
      <h1>로그인페이지</h1>
      <Breadcrumb>
        <Breadcrumb.Item href="#">메인페이지</Breadcrumb.Item>
        <Breadcrumb.Item href="#">회원가입</Breadcrumb.Item>
        <Breadcrumb.Item active>카카오로그인</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default Index;