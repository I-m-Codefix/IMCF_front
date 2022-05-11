import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Notfound from "./pages/notfound";
import Loginpage from "./pages/loginpage";
import Mainpage from "./pages/mainpage";
import Usermypage from "./pages/usermypage";
import Contentprovidermypage from "./pages/contentprovidermypage";
import Changepwdapage from "./pages/changepwdapage";
import Signuppage from "./pages/signuppage";
import Modifyinformationpage from "./pages/modifyinformationpage";
import Memberwithdrawalpage from "./pages/memberwithdrawalpage";
import Cpapage from "./pages/cpapage";
import Moviedescriptionpage from "./pages/moviedescriptionpage";
import Moviereviewpage from "./pages/moviereviewpage";
import Moviealgopage from "./pages/moviealgopage";
import Movieapplicationpage from "./pages/movieapplicationpage";
import Liveapplicationpage from "./pages/liveapplicationpage";
import Playscreen_fullpage from "./pages/playscreen_fullpage";
import Playscreen_windowpage from "./pages/playscreen_windowpage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Loginpage />} />
                <Route path="/signuppage" element={<Signuppage />} />
                <Route path="/main" element={<Mainpage />} />
                <Route path="/usermypage" element={<Usermypage />} />
                <Route path="/contentprovidermypage" element={<Contentprovidermypage />} />
                <Route path="/changepwdapage" element={<Changepwdapage />} />
                <Route path="/modifyinformationpage" element={<Modifyinformationpage />} />
                <Route path="/memberwithdrawalpage" element={<Memberwithdrawalpage />} />
                <Route path="/cpapage" element={<Cpapage />} />
                <Route path="/moviedescriptionpage" element={<Moviedescriptionpage />} />
                <Route path="/moviereviewpage" element={<Moviereviewpage />} />
                <Route path="/moviealgopage" element={<Moviealgopage />} />
                <Route path="/movieapplicationpage" element={<Movieapplicationpage />} />
                <Route path="/liveapplicationpage" element={<Liveapplicationpage />} />
                <Route path="/playscreen_fullpage" element={<Playscreen_fullpage />} />
                <Route path="/playscreen_windowpage" element={<Playscreen_windowpage />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;