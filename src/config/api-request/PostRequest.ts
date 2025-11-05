import apiClient from './apiClient';

export const PostRequest = async (endpoint: string, body: any) => {
    try {
        const response = await apiClient.post(endpoint, body);
        return response.data;
    } catch (error) {
        console.error('Erro no POSTRequest:', error);
        throw error;
    }
};
