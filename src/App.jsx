import { BrowserRouter, Routes, Route } from "react-router-dom";
//Admin page
import AdminDashboard from "./admin/pages/dashboard";

//Forms
import AdminLogin from "./admin/pages/forms";
import Login from "./admin/pages/forms/components/Login";
import CreateAccount from "./admin/pages/forms/components/CreateAccount";
import Auth from "./admin/pages/forms/components/Auth";
import ResetPass from "./admin/pages/forms/components/ResetPass";
import ForgotPass from "./admin/pages/forms/components/ForgotPass";

const App = () => {
  return (
    <div className="font-lato">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLogin />}>
            <Route index element={<CreateAccount />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/forgotpassword" element={<ForgotPass />}></Route>
            <Route path="authentication" element={<Auth />}></Route>
            <Route path="resetPassword" element={<ResetPass />}></Route>
          </Route>
          <Route path="/dashboard" element={<AdminDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
// import LoginPage from "./components/loginPage";
