import React, { FC } from 'react';

export interface SkillItemProps {
    title: string;
    description?: string;
}

const SkillItem: FC<SkillItemProps> = ({ title, description }) => {
    return (
        <div className="w-full py-6 text-left text-lg print:w-full md:w-full">
            <p className="text-gray-650  leading-normal">
                {title}
                <br />
                {description && <small className="font-bold text-gray-800">{description}</small>}
            </p>
        </div>
    );
};

export default SkillItem;
