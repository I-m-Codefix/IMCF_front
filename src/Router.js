import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Notfound from "./pages/notfound";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;