import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage"
import { FacultyLogin } from "../pages/faculty/FacultyLogin";
import { FacultyDashboard } from "../pages/faculty/FacultyDashboard";
import { FacultyRegistration } from "../pages/faculty/FacultyRegistration";
import { RecruiterLogin } from "../pages/recruiter/RecruiterLogin";
import { RecruiterDashboard } from "../pages/recruiter/RecruiterDashboard"
import { RecruiterRegistration } from "../pages/recruiter/RecruiterRegistration";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      
      <Route path="/faculty/login" element={<FacultyLogin/>} />

      <Route path="/faculty/dashboard" element={<FacultyDashboard/>} />

      <Route path="/faculty/registration" element={<FacultyRegistration/>} />
      
      <Route path="/recruiter/login" element={<RecruiterLogin/>}/>

      <Route path="/recruiter/dashboard" element={<RecruiterDashboard/>} />

      <Route path="/recruiter/registration" element={<RecruiterRegistration/>} />
      
    </Routes>
  )
}
