import {
  BarChart3,
  Gauge,
  LayoutDashboard,
  Network,
  Settings,
} from "lucide-react";
import { Route, Routes } from "react-router-dom";
import ModuleSidebar from "../../../components/modules/ModuleSidebar";
import InternetCheckHeader from "../components/InternetCheckHeader";
import InternetCheckOverviewPage from "./InternetCheckOverviewPage";
import InternetCheckConnectivityPage from "./InternetCheckConnectivityPage";
import InternetCheckPerformancePage from "./InternetCheckPerformancePage";
import InternetCheckHistoryPage from "./InternetCheckHistoryPage";
import InternetCheckSettingsPage from "./InternetCheckSettingsPage";

const items = [
  { label: "Overview", to: "/monitors/internet", icon: LayoutDashboard },
  { label: "Connectivity", to: "/monitors/internet/connectivity", icon: Network },
  { label: "Performance", to: "/monitors/internet/performance", icon: Gauge },
  { label: "History", to: "/monitors/internet/history", icon: BarChart3 },
  { label: "Settings", to: "/monitors/internet/settings", icon: Settings },
];

export default function InternetCheckPage() {
  return (
    <div>
      <InternetCheckHeader />

      <div className="mt-6 flex gap-6">
        <ModuleSidebar items={items} />

        <main className="min-w-0 flex-1">
          <Routes>
            <Route index element={<InternetCheckOverviewPage />} />
            <Route path="connectivity" element={<InternetCheckConnectivityPage />} />
            <Route path="performance" element={<InternetCheckPerformancePage />} />
            <Route path="history" element={<InternetCheckHistoryPage />} />
            <Route path="settings" element={<InternetCheckSettingsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}