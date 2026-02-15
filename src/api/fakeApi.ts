export type DashboardStats = {
  totalUsers: number;
  activeSessions: number;
  revenue: number;
  conversionRate: number;
};

export const fetchDashboardStats = async (): Promise<DashboardStats> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalUsers: 1240,
        activeSessions: 320,
        revenue: 5400,
        conversionRate: 3.2,
      });
    }, 700);
  });
};


export type AnalyticsData = {
  totalVisits: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionTime: string;
  monthlyTraffic: {
    month: string;
    visits: number;
  }[];
};

export const fetchAnalytics = async (): Promise<AnalyticsData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalVisits: 15420,
        uniqueVisitors: 8230,
        bounceRate: 38,
        avgSessionTime: "2m 45s",
        monthlyTraffic: [
          { month: "Jan", visits: 1200 },
          { month: "Feb", visits: 1500 },
          { month: "Mar", visits: 1800 },
          { month: "Apr", visits: 2100 },
          { month: "May", visits: 2400 },
        ],
      });
    }, 700);
  });
};


export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
}

export const fetchUsers = async (): Promise<User[]> => {
  // simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
        { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Manager", status: "Active" },
        { id: 4, name: "Sara Lee", email: "sara@example.com", role: "User", status: "Active" },
        { id: 5, name: "David Kim", email: "david@example.com", role: "User", status: "Inactive" },
      ]);
    }, 800);
  });
};

export const fetchReports = async () => {
  return new Promise<any[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Sales Report",
          date: "2026-02-10",
          status: "Completed",
        },
        {
          id: 2,
          title: "User Growth",
          date: "2026-02-12",
          status: "Pending",
        },
        {
          id: 3,
          title: "Revenue Analysis",
          date: "2026-02-14",
          status: "Completed",
        },
        {
          id: 4,
          title: "Traffic Report",
          date: "2026-02-15",
          status: "In Progress",
        },
      ]);
    }, 800);
  });
};

export const saveSettings = async (data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Saved settings:", data);
      resolve(data);
    }, 1000);
  });
};
