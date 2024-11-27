import React from 'react';
import './OfficerBlock.css'; // For styling if needed

const OfficerBlock = ({ year, officers }) => {
    return (
        <div className="officer-block">
            <h3 className="year">{year}</h3>
            <hr className="divider" />
            <ul className="officer-list">
                {officers.map((officer, index) => (
                    <li key={index} className="officer-item">{officer}</li>
                ))}
            </ul>
        </div>
    );
};

export default OfficerBlock;