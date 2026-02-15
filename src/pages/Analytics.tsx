import { useQuery } from "@tanstack/react-query";
import Layout from "../components/Layout";
import { fetchAnalytics } from "../api/fakeApi";
import type { AnalyticsData } from "../api/fakeApi";

const Analytics = () => {
  const { data, isLoading, isError } = useQuery<AnalyticsData>({
    queryKey: ["analytics"],
    queryFn: fetchAnalytics,
  });

  if (isLoading) {
    return (
      <Layout>
        <p className="p-6">Loading analytics...</p>
      </Layout>
    );
  }

  if (isError || !data) {
    return (
      <Layout>
        <p className="p-6 text-red-500">Failed to load analytics</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Analytics</h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-5 rounded shadow">
          <p className="text-sm text-gray-500">Total Visits</p>
          <h2 className="text-2xl font-bold mt-2">{data.totalVisits}</h2>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <p className="text-sm text-gray-500">Unique Visitors</p>
          <h2 className="text-2xl font-bold mt-2">{data.uniqueVisitors}</h2>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <p className="text-sm text-gray-500">Bounce Rate</p>
          <h2 className="text-2xl font-bold mt-2">{data.bounceRate}%</h2>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <p className="text-sm text-gray-500">Avg Session</p>
          <h2 className="text-2xl font-bold mt-2">{data.avgSessionTime}</h2>
        </div>
      </div>

      {/* Monthly Traffic Table */}
      <div className="bg-white rounded shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Monthly Traffic</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Month</th>
              <th className="py-2">Visits</th>
            </tr>
          </thead>
          <tbody>
            {data.monthlyTraffic.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{item.month}</td>
                <td className="py-2">{item.visits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Analytics;
