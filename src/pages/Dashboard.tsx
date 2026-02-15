import { useQuery } from "@tanstack/react-query";
import Layout from "../components/Layout";
import type { DashboardStats } from "../api/fakeApi";
import { fetchDashboardStats } from "../api/fakeApi";

const Dashboard = () => {
  const { data, isLoading, isError } = useQuery<DashboardStats>({
    queryKey: ["dashboardStats"],
    queryFn: fetchDashboardStats,
  });

  if (isLoading) {
    return (
      <Layout>
        <p className="p-6">Loading dashboard...</p>
      </Layout>
    );
  }

  if (isError || !data) {
    return (
      <Layout>
        <p className="p-6 text-red-500">Failed to load data</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Users */}
        <div className="bg-white p-5 rounded shadow">
          <p className="text-gray-500 text-sm">Total Users</p>
          <h2 className="text-2xl font-bold mt-2">
            {data.totalUsers}
          </h2>
        </div>

        {/* Active Sessions */}
        <div className="bg-white p-5 rounded shadow">
          <p className="text-gray-500 text-sm">Active Sessions</p>
          <h2 className="text-2xl font-bold mt-2">
            {data.activeSessions}
          </h2>
        </div>

        {/* Revenue */}
        <div className="bg-white p-5 rounded shadow">
          <p className="text-gray-500 text-sm">Revenue</p>
          <h2 className="text-2xl font-bold mt-2">
            ${data.revenue}
          </h2>
        </div>

        {/* Conversion Rate */}
        <div className="bg-white p-5 rounded shadow">
          <p className="text-gray-500 text-sm">Conversion Rate</p>
          <h2 className="text-2xl font-bold mt-2">
            {data.conversionRate}%
          </h2>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
