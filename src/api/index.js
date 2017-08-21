import reqMethod from './config';
export const getDashboardList = params => reqMethod('GET', '/list_dashboard', params);
export const hideDashboard = params => reqMethod('GET', 'hidden_dashboard', params);
export const delDashboard = params => reqMethod('GET', 'delete_dashboard', params);
