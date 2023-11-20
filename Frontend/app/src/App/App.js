import { PageRoutes } from "../PageRoutes";
import { LoginRoutes } from "../LoginRoutes";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import { Home } from "../pages/Home";
import { Aboutus } from "../pages/Aboutus";
import { Jobs } from "../pages/Jobs";
import { Contact } from "../pages/Contact";

function App() {
  return (
    <Routes>
      <Route element={<LoginRoutes />}>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<PageRoutes />}>
        <Route path="/pages/home" element={<Home />} />
        <Route path="/pages/aboutus" element={<Aboutus/>} />
        <Route path="/pages/jobs" element={<Jobs/>} />
        <Route path="/pages/contact" element={<Contact/>} />
      </Route>
    </Routes>
  );
}

export default App;
