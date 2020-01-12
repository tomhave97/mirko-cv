import React from 'react'

export const SkillList: React.FC = props => {
    return (
        <div className="skill-list">
            {props.children}
        </div>
    );
}
