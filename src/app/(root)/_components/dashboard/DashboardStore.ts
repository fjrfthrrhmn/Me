import { create } from 'zustand';

type DASHBOARD_TYPE = 'github' | 'monkeyType' | 'leetCode';

interface DashboardState {
  dashboardType: DASHBOARD_TYPE;
  setDashboardType: (type: DASHBOARD_TYPE) => void;
}

export const useDashboardStore = create<DashboardState>()(set => ({
  dashboardType: 'github',
  setDashboardType: type => set({ dashboardType: type }),
}));
