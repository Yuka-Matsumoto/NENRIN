'use client';

export default function SeniorUseButton({ onClick }: { onClick: () => void }) {
    return (
        <button onClick={onClick}>
            シニアの方はこちら
        </button>
    );
}