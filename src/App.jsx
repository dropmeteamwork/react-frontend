import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import SecondaryNav from "./components/SecondaryNav";
import OverViewPage from "./pages/OverViewPage";
import EnvironmentPage from "./pages/EnvironmentPage";
import UserPage from "./pages/UserPage";
import MachinePage from "./pages/MachinePage";
import AiPerformancePage from "./pages/AiPerformancePage";
import TransactionPage from "./pages/TransactionPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import ReportPage from "./pages/ReportPage";

export default function App() {
  
  return (
    <>
      <NavBar />
      <div className="p-6 min-h-screen bg-gray-50">
        <SecondaryNav />
        <Routes>
          <Route path="/" element={<OverViewPage />} />
          <Route path="/environment" element={<EnvironmentPage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/machines" element={<MachinePage />} />
          {/* <Route path="/ai-performance" element={<AiPerformancePage />} /> */}
          <Route path="/transaction" element={<TransactionPage />} />
          {/* <Route path="/analytics" element={<AnalyticsPage/>} /> */}
          {/* <Route path="/reports" element={<ReportPage/>} /> */}
        </Routes>
      </div>
    </>
  );
}
