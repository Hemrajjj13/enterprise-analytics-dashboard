import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = React.memo(() => {
    return (
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
    );
});