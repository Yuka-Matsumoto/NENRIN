import React from 'react';

type SeniorUseButtonProps = {
    onClick: () => void;
};

const SeniorUseButton: React.FC<SeniorUseButtonProps> = ({ onClick }) => {
    return <button onClick={onClick}>利用する</button>;
};

export default SeniorUseButton;