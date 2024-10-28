import React, { useState } from 'react';
import { postWithAuth } from '../../lib/api';

const MessageForm = ({ onMessageSent }) => {
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await postWithAuth('/api/messages', { content });
            setContent(''); // フォームをリセット
            onMessageSent(); // メッセージ一覧を更新
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="メッセージを入力してください..."
            />
            <button type="submit">送信</button>
        </form>
    );
};

export default MessageForm;
