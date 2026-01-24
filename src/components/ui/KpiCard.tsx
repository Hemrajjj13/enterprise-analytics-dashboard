import React from 'react'

type props = {
    title: string;
    value: string | number;
};

export const KpiCard = ({ title, value }: props) => {

    return (
        <div
            style={{
                background: "white",
                padding: "1rem",
                borderRadius: "8px",
                minWidth: "180px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
        >
            <h3 style={{ fontSize: "0.9rem", color: "#6b7280" }}>{title}</h3>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{value}</p>
        </div>
    )
}

