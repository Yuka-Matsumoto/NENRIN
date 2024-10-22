// 'use client';

// export default function SeniorUseButton({ onClick }: { onClick: () => void }) {
//     return (
//         <button onClick={onClick}>
//             利用する
//         </button>
//     );
// }

import React from 'react';

type SeniorUseButtonProps = {
    onClick: () => void;
};

const SeniorUseButton: React.FC<SeniorUseButtonProps> = ({ onClick }) => {
    return (
        <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={onClick}
        >
            利用する
        </button>
    );
};

export default SeniorUseButton;
