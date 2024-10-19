'use client';

export default function UnionUseButton({ onClick }: { onClick: () => void }) {
    return (
        <button onClick={onClick}>
            利用する
        </button>
    );
}