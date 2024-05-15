import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { UserProvider } from "./context/UserContext";
import Login from "./login/Login";
import Register from "./login/Register";
import Logout from "./login/Logout";
import Change from "./login/Change";
import Forget from "./login/Forget";
import Profile from "./login/Profile";
import ResetPasswordForm from "./login/ResetPasswordForm";
import Documentation from "./components/Documentation";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/p" element={<Profile />} />

        <Route path="/logout" element={<Logout />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/changepass" element={<Change />} />
        <Route
          path="/reset-password/:resetToken"
          element={<ResetPasswordForm />}
        />
      </Routes>
    </>
  );
};
function App() {
  return (
    <>
      <UserProvider>
        <Nav />
        <Routing />
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
