import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardPage } from "../../features/dashboard/DashboardPage";
import { AnalyticsPage } from "../../features/analytics/AnalyticsPage";
import { ReportsPage } from "../../features/reports/ReportsPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
