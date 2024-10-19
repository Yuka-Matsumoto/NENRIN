'use client';

export default function SeniorUseButton({ onClick }: { onClick: () => void }) {
    return (
        <button onClick={onClick}>
            利用する
        </button>
    );
}
