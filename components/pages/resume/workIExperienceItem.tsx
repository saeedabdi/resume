import React, { FC, ReactNode } from 'react';

export interface WorkIExperienceItemProps {
    date: string;
    location: string;
    children?: ReactNode;
    title?: string;
    projects?: { name: string; url: string }[];
    subTitle?: string;
    technologies?: string[];
    description?: string;
}

const WorkIExperienceItem: FC<WorkIExperienceItemProps> = ({
    children,
    date,
    location,
    title,
    technologies,
    projects,
    subTitle,
    description,
}) => {
    return (
        <div className=" flex w-full  flex-col print:flex-row md:flex-row">
            <div className=" prose w-full py-6  print:w-1/4 print:justify-center print:p-4 print:pr-8 md:w-1/4 md:justify-center  md:p-4 md:pr-8">
                <h4>{date}</h4>

                <h4>{location}</h4>
            </div>

            <div className="w-full border-gray-200 print:w-3/4  print:border-l print:pl-8 md:w-3/4 md:border-l  md:pl-8">
                <div className="prose">
                    <div className="w-full">
                        <h3 className="leading-snugish mb-2 text-lg font-semibold text-gray-700">
                            {title}
                            <br />
                            <small>{subTitle}</small>
                        </h3>
                    </div>
                    <div className="mt-2.1 text-md mb-2 leading-normal text-gray-700">
                        {description}
                    </div>
                </div>
                {children && children}
                <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-700">Technologies</h4>
                    <div className="-mx-2 flex flex-wrap">
                        {technologies &&
                            technologies.map((technology) => (
                                <div
                                    key={technology}
                                    className="mx-2.5 flex items-center py-1.5 text-sm font-medium text-gray-700"
                                >
                                    {technology}
                                </div>
                            ))}
                    </div>
                </div>
                {projects && (
                    <div className="flex flex-col items-center justify-center p-4 pr-8 print:w-1/4  md:w-1/4 ">
                        <div className="prose-xl w-full py-4 text-center text-xl font-bold  capitalize text-slate-700 ">
                            <h3>Projects</h3>

                            <div className=" prose-xl  flex flex-col">
                                {projects?.map((project, index) => (
                                    <a
                                        key={index}
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex  p-2"
                                    >
                                        <span className="text-sm text-gray-700">
                                            {project.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WorkIExperienceItem;
