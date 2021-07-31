import React from 'react';

export type TProps = {
    id: string;
    title: string;
    state: boolean;
}

const Channel: React.FC<TProps> = ({ children, id, title, state }) => {
    return (
        <div className="list-item">
            <input className="bg-green-500 text-white font-semibold rounded-lg" type="text" value={title} readOnly={true} />
        </div>
    );
}

export default Channel;