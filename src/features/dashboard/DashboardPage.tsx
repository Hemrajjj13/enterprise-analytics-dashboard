import React from "react";
import { MainLayout } from "../../components/layout/MainLayout";
import { useQuery } from "@tanstack/react-query";
import { fetchDashboardStats } from "../../services/api/dashboardApi";
import { KpiCard } from "../../components/ui/KpiCard";

export const DashboardPage = () => {
  const { data, isLoading, isError} = useQuery({
    queryKey: ["dashboardStats"],
    queryFn: fetchDashboardStats,
  });
  return (
    <MainLayout>
      <h1>Dashboard</h1>
      {isLoading && <p>Loading dashboard data...</p>}

      {isError && <p>Something went wrong ❌</p>}

      {data && (
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <KpiCard title="Total Users" value={data.users} />
          <KpiCard title="Revenue" value={`₹${data.revenue}`} />
        </div>
      )}
    </MainLayout>
  );
};
