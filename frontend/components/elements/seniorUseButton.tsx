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
            className="bg-[#5fbea0] hover:bg-[#4ca389] text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={onClick}
        >
            利用する
        </button>
    );
};

export default SeniorUseButton;
