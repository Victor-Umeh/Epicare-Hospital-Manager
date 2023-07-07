import { BrowserRouter, Routes, Route } from "react-router-dom";
//Admin page
import AdminDashboard from "./admin/pages/dashboard";
import AdminLogin from "./admin/pages/login";
import AdminCreateAccount from "./admin/pages/create-account";
import AdminAuth from "./admin/pages/verification";
import AdminResetPass from "./admin/pages/reset-password";
import AdminForgotPass from "./admin/pages/forgot-password";

const App = () => {
  return (
    <div className="font-lato">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminCreateAccount />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/forgotpassword" element={<AdminForgotPass />} />
          <Route path="authentication" element={<AdminAuth />} />
          <Route path="resetPassword" element={<AdminResetPass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
