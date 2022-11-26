import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./pages/loginpage";
import Notfound from "./pages/notfound";
import Mainpage from "./pages/mainpage";
import Usermypage from "./pages/usermypage";
import Signuppage from "./pages/signuppage";
import Mailalarm from "./pages/mailalarm";
import Modifyinformationpage from "./pages/modifyinformationpage";
import Pwdchangepage from "./pages/pwdchangepage";
import Emailpage from "./pages/emailpage";
import Cpapage from "./pages/cpapage";
import Moviedescriptionpage from "./pages/moviedescriptionpage";
import Movieapplicationpage from "./pages/movieapplicationpage";
import Liveapplicationpage from "./pages/liveapplicationpage";
import Playscreen_windowpage from "./pages/playscreen_windowpage";
import Memberwithdrawalpage from "./pages/memberwithdrawalpage";
import Dramapage from "./pages/mainpage_drama";
import Moviepage from "./pages/mainpage_movie";
import Animepage from "./pages/mainpage_anime";
import Otherpage from "./pages/mainpage_other";
import Test from "./pages/test";
import Test2 from "./pages/test2";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Loginpage />} />
                <Route path="signup" element={<Signuppage />} />
                <Route path="signup/auth" element={<Emailpage />} />
                <Route path="main" element={<Mainpage />} />
                <Route path="drama" element={<Dramapage />} />
                <Route path="movie" element={<Moviepage />} />
                <Route path="anime" element={<Animepage />} />
                <Route path="other" element={<Otherpage />} />
                <Route path="user" element={<Usermypage />} />
                <Route path="delete" element={<Memberwithdrawalpage />} />
                <Route path="modify" element={<Modifyinformationpage />} />
                <Route path="pwdchange" element={<Pwdchangepage />} />
                <Route path="contentprovide" element={<Cpapage />} />
                <Route path="infomovie" element={<Moviedescriptionpage />}>
                    <Route path=":movieId" element={<Moviedescriptionpage />} />
                </Route>
                <Route path="registmovie" element={<Movieapplicationpage />} />
                <Route path="registlive" element={<Liveapplicationpage />} />
                <Route path="mailalarm" element={<Mailalarm />} />
                <Route path="play" element={<Playscreen_windowpage />}>
                    <Route path=":movieId" element={<Playscreen_windowpage />} />
                </Route>
                <Route path="*" element={<Notfound />} />
                <Route path="test" element={<Test />} />
                <Route path="test2" element={<Test2 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;