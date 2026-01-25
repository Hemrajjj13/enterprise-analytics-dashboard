import React from "react";
import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

type State = {
    hasError: boolean;
};

export class ErrorBoundary extends React.Component<Props, State> {
    state: State = { hasError: false };
    
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: "2rem" }}>
                    <h2>Something went wrong 😕</h2>
                    <p>Please refresh the page or try again later.</p>
                </div>
            );
        }

        return this.props.children;
    }
}