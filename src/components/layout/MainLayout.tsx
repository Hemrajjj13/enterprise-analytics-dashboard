import React from "react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          backgroundColor: "#111827",
          color: "white",
          padding: "1rem",
        }}
      >
        <h2 style={{ marginBottom: "2rem" }}>Enterprise</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <span>Dashboard</span>
          <span>Analytics</span>
          <span>Reports</span>
          <span>Settings</span>
        </nav>
      </aside>

      {/* Main Section */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <header
          style={{
            height: "60px",
            backgroundColor: "#1f2937",
            color: "white",
            display: "flex",
            alignItems: "center",
            padding: "0 1rem",
          }}
        >
          Welcome, Admin
        </header>

        {/* Page Content */}
        <main style={{ flex: 1, padding: "1rem", background: "#f9fafb" }}>
          {children}
        </main>
      </div>
    </div>
  );
};
