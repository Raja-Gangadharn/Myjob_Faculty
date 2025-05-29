import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage"
import { FacultyLogin } from "../pages/faculty/FacultyLogin";
import { FacultyDashboard } from "../pages/faculty/FacultyDashboard";
import { RecruiterLogin } from "../pages/Recruiter/RecruiterLogin";
import { RecruiterDashboard } from "../pages/Recruiter/RecruiterDashboard";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage
      />} />

      <Route path="/faculty/login" element={<FacultyLogin/>} />

      <Route path="/faculty/dashboard" element={<FacultyDashboard/>} />
      
      <Route path="/recruiter/login" element={<RecruiterLogin/>} />

      <Route path="/recruiter/dashboard" element={<RecruiterDashboard/>} />

    </Routes>
  )
}
