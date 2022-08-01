import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AuthRoute from './component/AuthRoute';
import Counnter from './component/Counter';
import { useEffect, useState } from 'react';
import axios from "axios";


function Logintoken() {
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
    }, []);
    function loginCallBack(login) {
        setIsLogin(login);
    }
    return (
        <div className="App">
            <BrowserRouter>
                <AuthRoute exact isLogin={isLogin} path="/" component={HomePage} />
                <Route path="/login" render={(props) => <LoginPage {...props} loginCallBack={loginCallBack} />} />
                <AuthRoute path="/counter" isLogin={isLogin} component={Counnter} />
            </BrowserRouter>
        </div>
    );
}

export default Logintoken;