import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import { store } from "./store/store";
import "./index.css";

// React Query Client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* Redux Provider */}
    <Provider store={store}>
      
      {/* React Query Provider */}
      <QueryClientProvider client={queryClient}>
        
        {/* Router */}
        <BrowserRouter>
          <App />
        </BrowserRouter>

      </QueryClientProvider>

    </Provider>
  </React.StrictMode>
);
