// src/app/messages/[id]/page.tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchWithAuth, postWithAuth } from '../../../lib/api';

const MessageThreadPage = () => {
    const router = useRouter();
    const { id } = router.query; // URLからスレッドのIDを取得
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const data = await fetchWithAuth(`/api/messages/${id}`);
                setMessages(data);
            } catch (error) {
                console.error('Error fetching message thread:', error);
            }
        };

        if (id) fetchMessages();
    }, [id]);

    const handleSendMessage = async () => {
        try {
            await postWithAuth(`/api/messages/${id}`, { content: newMessage });
            setNewMessage(''); // フォームをリセット
            fetchMessages(); // 新しいメッセージを表示
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div>
            <h2>メッセージスレッド</h2>
            {messages.map((msg) => (
                <div key={msg.id}>
                    <p>{msg.content}</p>
                    <p>送信者: {msg.sender_id}</p>
                    <p>受信者: {msg.receiver_id}</p>
                    <p>日時: {msg.sentAt}</p>
                </div>
            ))}
            <textarea 
                value={newMessage} 
                onChange={(e) => setNewMessage(e.target.value)} 
                placeholder="返信メッセージを入力してください..." 
            />
            <button onClick={handleSendMessage}>送信</button>
        </div>
    );
};

export default MessageThreadPage;
