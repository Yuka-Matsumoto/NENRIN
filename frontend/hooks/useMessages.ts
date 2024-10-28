import { useState } from 'react';
import { fetchWithAuth } from '../lib/api';

export const useMessages = (jobId: string) => {
    const [messages, setMessages] = useState([]);

    const fetchMessages = async () => {
        const data = await fetchWithAuth(`/api/messages/${jobId}`);
        setMessages(data);
    };

    const sendMessage = async (receiverId: string, content: string) => {
        await fetchWithAuth('/api/messages', {
            method: 'POST',
            body: JSON.stringify({ receiver_id: receiverId, job_id: jobId, content }),
        });
        fetchMessages();  // 送信後に再度メッセージ一覧を取得
    };

    return { messages, fetchMessages, sendMessage };
};
