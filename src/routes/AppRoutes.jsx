import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage"
import { FacultyLogin } from "../pages/faculty/FacultyLogin";
import { FacultyDashboard } from "../pages/faculty/FacultyDashboard";
import { RecruiterLogin } from "../pages/Recruiter/RecruiterLogin";
import { RecruiterDashboard } from "../pages/Recruiter/RecruiterDashboard";
import {FacultyRegistration} from "../pages/faculty/FacultyRegistration";
import { RecruiterRegistration } from "../pages/recruiter/RecruiterRegistration";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/faculty/login" element={<FacultyLogin/>} />

      <Route path="/faculty/dashboard" element={<FacultyDashboard/>} />

      <Route path="/faculty/Registration" element={<FacultyRegistration/>} />
      
      <Route path="/recruiter/login" element={<RecruiterLogin/>} />

      <Route path="/recruiter/dashboard" element={<RecruiterDashboard/>} />

      <Route path="/recruiter/registration" element={<RecruiterRegistration/>} />
      
    </Routes>
  )
}
