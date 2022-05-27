import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./pages/loginpage";
import Notfound from "./pages/notfound";
import Mainpage from "./pages/mainpage";
import Usermypage from "./pages/usermypage";
import Signuppage from "./pages/signuppage";
import Modifyinformationpage from "./pages/modifyinformationpage";
import Cpapage from "./pages/cpapage";
import Moviedescriptionpage from "./pages/moviedescriptionpage";
import Movieapplicationpage from "./pages/movieapplicationpage";
import Liveapplicationpage from "./pages/liveapplicationpage";
import Playscreen_fullpage from "./pages/playscreen_fullpage";
import Playscreen_windowpage from "./pages/playscreen_windowpage";
import Memberwithdrawalpage from "./pages/memberwithdrawalpage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Loginpage />} />
                <Route path="signup" element={<Signuppage />} />
                <Route path="main" element={<Mainpage />} />
                <Route path="/user" element={<Usermypage />} />
                <Route path="delete" element={<Memberwithdrawalpage />} />
                <Route path="modify" element={<Modifyinformationpage />} />
                <Route path="cotentprovide" element={<Cpapage />} />
                <Route path="infomovie" element={<Moviedescriptionpage />} />
                <Route path="registmovie" element={<Movieapplicationpage />} />
                <Route path="registlive" element={<Liveapplicationpage />} />
                <Route path="playscreen_fullpage" element={<Playscreen_fullpage />} />
                <Route path="playscreen_windowpage" element={<Playscreen_windowpage />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;