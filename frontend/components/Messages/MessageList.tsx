"use client";

import React, { useEffect, useState } from 'react';
import { fetchWithAuth } from '../../lib/api';

const MessageList = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const data = await fetchWithAuth('/api/messages');
                setMessages(data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };
        fetchMessages();
    }, []);

    return (
        <div>
            <h2>メッセージ一覧</h2>
            {messages.map((message) => (
                <div key={message.id}>
                    <p>送信者: {message.sender}</p>
                    <p>メッセージ: {message.content}</p>
                    <p>日時: {message.sentAt}</p>
                </div>
            ))}
        </div>
    );
};

export default MessageList;
