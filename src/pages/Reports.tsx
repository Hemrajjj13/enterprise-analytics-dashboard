import { useQuery } from "@tanstack/react-query";
import Layout from "../components/Layout";
import { fetchReports } from "../api/fakeApi";

const Reports = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["reports"],
    queryFn: fetchReports,
  });

  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Reports</h1>

        {isLoading ? (
          <p>Loading reports...</p>
        ) : (
          <div className="overflow-x-auto bg-white rounded shadow">
            <table className="min-w-full">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="p-3">ID</th>
                  <th className="p-3">Title</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {data?.map((report) => (
                  <tr
                    key={report.id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="p-3">{report.id}</td>
                    <td className="p-3">{report.title}</td>
                    <td className="p-3">{report.date}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded text-sm ${
                          report.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : report.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {report.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Reports;
