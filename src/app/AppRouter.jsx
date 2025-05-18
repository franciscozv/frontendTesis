// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../features/home/pages/HomePage";
import LoginPage from "../features/auth/pages/LoginPage";
import NotFoundPage from "../shared/components/NotFoundPage";
import Events from "../features/events/pages/EventsPage";
import Finances from "../features/finances/pages/FinancesPage";
import Members from "../features/members/pages/MembersPage";
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/finances" element={<Finances />} />
        <Route path="/members" element={<Members />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
