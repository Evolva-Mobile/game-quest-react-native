import { API_BASE } from '../api-routes/apiBase';
import apiClient from './apiClient';

export const PostRequest = async (endpoint: string, body: any) => {
    const finalUrl = API_BASE + endpoint

    try {
        const response = await apiClient.post(finalUrl, body);
        return response.data;
    } catch (error) {
        console.error('Erro no POSTRequest:', error);
        throw error;
    }
};
