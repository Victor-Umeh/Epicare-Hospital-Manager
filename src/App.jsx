import { BrowserRouter, Routes, Route } from "react-router-dom";
//Admin page
import AdminDashboard from "./admin/pages/dashboard";
import AdminAppointment from "./admin/pages/appointments";
import AdminBirth from "./admin/pages/birth";
import AdminAccountant from "./admin/pages/accountant";
import AdminDeath from "./admin/pages/death";
import AdminDoctors from "./admin/pages/doctors";
import AdminDrugs from "./admin/pages/drugs";
import AdminLaboratory from "./admin/pages/laboratory";
import AdminMortuary from "./admin/pages/mortuary";
import AdminPatients from "./admin/pages/patients";
import AdminPayments from "./admin/pages/payment";
import AdminProfile from "./admin/pages/profile";
import AdminReceptionist from "./admin/pages/receptionist";

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
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/forgotpassword" element={<AdminForgotPass />} />
          <Route path="authentication" element={<AdminAuth />} />
          <Route path="resetPassword" element={<AdminResetPass />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/appointment" element={<AdminAppointment />} />
          <Route path="/birth" element={<AdminBirth />} />
          <Route path="/accountant" element={<AdminAccountant />} />
          <Route path="/death" element={<AdminDeath />} />
          <Route path="/doctors" element={<AdminDoctors />} />
          <Route path="/drugs" element={<AdminDrugs />} />
          <Route path="/laboratory" element={<AdminLaboratory />} />
          <Route path="/mortuary" element={<AdminMortuary />} />
          <Route path="/patients" element={<AdminPatients />} />
          <Route path="/payments" element={<AdminPayments />} />
          <Route path="/profile" element={<AdminProfile />} />
          <Route path="/receptionist" element={<AdminReceptionist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
