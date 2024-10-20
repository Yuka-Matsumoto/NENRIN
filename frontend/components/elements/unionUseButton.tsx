'use client';

export default function UnionUseButton({ onClick }: { onClick: () => void }) {
    return (
        <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded"
        >
            利用する
        </button>
    );
}