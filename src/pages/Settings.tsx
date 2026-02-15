import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Layout from "../components/Layout";
import { saveSettings } from "../api/fakeApi";

const Settings = () => {
  const [form, setForm] = useState({
    name: "Admin User",
    email: "admin@example.com",
    notifications: true,
    darkMode: false,
  });

  const mutation = useMutation({
    mutationFn: saveSettings,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  return (
    <Layout>
      <div className="p-4 max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow space-y-4"
        >
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Notifications */}
          <div className="flex items-center justify-between">
            <span>Email Notifications</span>
            <input
              name="notifications"
              type="checkbox"
              checked={form.notifications}
              onChange={handleChange}
              className="h-5 w-5"
            />
          </div>

          {/* Dark Mode */}
          <div className="flex items-center justify-between">
            <span>Dark Mode</span>
            <input
              name="darkMode"
              type="checkbox"
              checked={form.darkMode}
              onChange={handleChange}
              className="h-5 w-5"
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            {mutation.isPending ? "Saving..." : "Save Settings"}
          </button>

          {mutation.isSuccess && (
            <p className="text-green-600 text-sm">
              Settings saved successfully!
            </p>
          )}
        </form>
      </div>
    </Layout>
  );
};

export default Settings;
