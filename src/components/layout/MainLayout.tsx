import React from "react";
import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { useSidebar } from "../../hooks/ui/useSidebar";

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  const { isSidebarOpen, toggle } = useSidebar();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {isSidebarOpen && <Sidebar />}

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
          <button onClick={toggle}>Toggle Sidebar</button>
        </header>

        <main style={{ flex: 1, padding: "1rem", background: "#f9fafb" }}>
          {children}
        </main>
      </div>
    </div>
  );
};
