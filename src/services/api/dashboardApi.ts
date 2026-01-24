export const fetchDashboardStats = () => {
    return new Promise<{users: number; revenue: number }>((resolve) => {
        setTimeout(() => {
            resolve({
                users: 1240,
                revenue: 56000,
            });
        }, 1500);
    });
};