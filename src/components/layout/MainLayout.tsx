import React from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { toggleSidebar } from "../../state/slices/uiSlice";

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(
    (state: RootState) => state.ui.isSidebarOpen
  );

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {isSidebarOpen && (
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
            <Link to="/" style={{ color: "white" }}>Dashboard</Link>
            <Link to="/analytics" style={{ color: "white" }}>Analytics</Link>
            <Link to="/reports" style={{ color: "white" }}>Reports</Link>
          </nav>
        </aside>
      )}

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <header
          style={{
            height: "60px",
            backgroundColor: "#1f2937",
            color: "white",
            display: "flex",
            alignItems: "center",
            padding: "0 1rem",
            justifyContent: "space-between",
          }}
        >
          <span>Enterprise Dashboard</span>
          <button onClick={() => dispatch(toggleSidebar())}>
            Toggle Sidebar
          </button>
        </header>

        <main style={{ flex: 1, padding: "1rem", background: "#f9fafb" }}>
          {children}
        </main>
      </div>
    </div>
  );
};
