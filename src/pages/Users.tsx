import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Layout from "../components/Layout";
import { fetchUsers } from "../api/fakeApi";
import type { User } from "../api/fakeApi";

const Users = () => {
  const [search, setSearch] = useState("");

  const { data, isLoading, isError } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  // Filter users by name or email
  const filteredUsers =
    data?.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    ) || [];

  return (
    <Layout>
      <div className="p-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <h1 className="text-2xl font-bold mb-2 sm:mb-0">Users</h1>

          <input
            type="text"
            placeholder="Search users..."
            className="border rounded px-3 py-2 w-full sm:w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* States */}
        {isLoading && <p>Loading users...</p>}
        {isError && <p>Error loading users</p>}

        {/* Table */}
        {!isLoading && (
          <div className="bg-white shadow rounded overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100 text-left text-sm">
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-t text-sm">
                    <td className="p-3 font-medium">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.role}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}

                {filteredUsers.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-4 text-center text-gray-500">
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Users;
