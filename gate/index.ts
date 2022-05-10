import { ResponseGetUsers } from '@app/interfaces/api/usersInterface';

import api from './api';

const authApi = {
    login: (data: { email: string; password: string }) => api.post('/auth/login', data),
    users: () => api.get<ResponseGetUsers[]>('users'),
};

const adminDepositApi = {
    allCommissions: () => api.get('/subscription/v1/wallets/admin/users/commissions-sum'),
};

export default {
    ...authApi,
    ...adminDepositApi,
};
