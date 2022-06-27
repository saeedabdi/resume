import { Fragment } from 'react';
import ChromoIcon from 'assets/svg/chrom.svg';
import EducationIcon from 'assets/svg/education.svg';
import MailIcon from 'assets/svg/mail.svg';
import PhoneIcon from 'assets/svg/phone.svg';
import ProfileIcon from 'assets/svg/profile.svg';
import SkillIcon from 'assets/svg/skillIcon.svg';
import WorkIcon from 'assets/svg/workIcon.svg';
import { Card, HobbyItem, SkillItem, WorkIExperienceItem } from 'components/pages/resume';
import { WorkIExperienceItemProps } from 'components/pages/resume/workIExperienceItem';
import Head from 'next/head';
import { hobbies, Skills, WorkExperience } from 'statics/data';

export default function Home() {
    const technologies = [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Apollo',
        'GraphQL',
        'React Native',
        'Node.js',
        'Express',
        'MongoDB',
        'Redux',
        'React-Redux',
        'Redux-Thunk',
        'Redux-Saga',
        'Saga',
        'Sass',
        'Styled-Components',
        'Material-UI',
        'React-Router-Dom',
    ];
    const pesteProjects: { name: string; url: string }[] = [
        {
            name: 'Komodaa',
            url: 'https://app.komodaa.com/',
        },
        {
            name: 'Head start',
            url: 'http://headstart.work/',
        },
        {
            name: 'Link see',
            url: 'https://linksee.me/',
        },
        {
            name: 'Shahkelid',
            url: 'https://shahkelid.foundation/',
        },
        {
            name: 'Pofefilm',
            url: 'https://pofefilm.com/',
        },
        {
            name: 'Foolazh',
            url: '',
        },
        {
            name: 'Bonyad',
            url: 'http://bonyadnews.ir/',
        },
        {
            name: 'Helpiya',
            url: 'https://helpiya.com/',
        },
        {
            name: 'Panel',
            url: 'https://panel.headstart.work/',
        },
    ];
    return (
        <>
            <Head>
                <title>Saeed Abdi resume</title>
            </Head>
            <div className=" w-full bg-gray-200 py-20  print:bg-white print:p-0 ">
                <div className=" mx-auto w-full max-w-screen-xl bg-white p-4 py-10 shadow-sm print:w-full print:max-w-screen-2xl print:p-0  print:shadow-none  md:p-8 md:py-12">
                    <div className=" flex flex-col p-4 px-2 py-10 print:flex-row print:p-0 md:flex-row   md:p-3">
                        <div className=" flex w-full flex-col items-center justify-center p-4 pr-8 print:w-1/4  md:w-1/4 ">
                            <img
                                className=" transform overflow-hidden bg-gray-300 object-center print:w-4/6 md:w-4/6"
                                src="/saeed-abdi.jpg"
                                alt="Saeed Abdi"
                            />
                            <div className="prose-xl w-full py-4 text-center text-xl font-bold  capitalize text-slate-700 ">
                                Saeed Abdi
                            </div>
                        </div>
                        <div className="w-full border-gray-200 print:w-3/4 print:border-l  print:pl-8 md:w-3/4 md:border-l  md:pl-8">
                            <Card title="profile" icon={<ProfileIcon className="mr-2 h-7 w-7" />}>
                                <div>
                                    <h2 className="prose-lg flex w-full items-center px-2 py-10 text-lg text-gray-700 md:w-2/3">
                                        Front End Developer focused on React & React Native in
                                        building and maintaining web applications. Proficient in
                                        JavaScript, TypeScript, React; plus few other related
                                        libraries.
                                        <br />
                                        I’m honest and exact. So if you hire me, I can complete this
                                        project in a short time as you want. I am available for now
                                        and I can start working right now. I guarantee the best
                                        quality of my working. I'd like to discuss more in detail
                                        via chat. Best regards.
                                    </h2>
                                    <div className="grid w-full   grid-cols-1 items-center justify-center  gap-4  p-4 md:grid-cols-3">
                                        <a href="tel:+989022323244" className=" flex items-center">
                                            <PhoneIcon className="mx-2 h-7 w-7" />
                                            +989022323244
                                        </a>
                                        <a
                                            href="mailto:saeedabdi25.s@gmail.com"
                                            className=" flex items-center"
                                        >
                                            <MailIcon className="mx-2 h-7 w-7" />
                                            saeedabdi25.s@gmail.com
                                        </a>
                                        <a
                                            href="https://github.com/saeedabdi"
                                            className=" flex items-center"
                                        >
                                            <ChromoIcon className="mx-2 h-7 w-7" />
                                            https://github.com/saeedabdi
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/saeed-abdi-256415197/"
                                            className=" flex items-center"
                                        >
                                            <ChromoIcon fill="black" className="mx-2 h-8 w-8" />
                                            https://www.linkedin.com/in/saeed-abdi-256415197/
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <Card icon={<WorkIcon className="mx-2 h-7 w-7" />} title="Work Experience">
                        {WorkExperience.map((w: WorkIExperienceItemProps, idx) => {
                            if (idx === WorkExperience.length - 1) {
                                return (
                                    <>
                                        <WorkIExperienceItem
                                            technologies={technologies}
                                            date="Jan 2020 - May 2021 · 1 yr 5 mos"
                                            location="Amsterdam, Netherlands"
                                            title="Front-end developer"
                                            subTitle="Peste"
                                            projects={pesteProjects}
                                        >
                                            <div className="pb-10 ">
                                                <p className="mt-2.1 text-md mb-2 leading-normal text-gray-700">
                                                    Peste is a development agency that helps out
                                                    businesses with their outsourced web
                                                    applications. As the Full-stack developer, my
                                                    core activities included:
                                                </p>
                                                <ul className="list-disc pl-8">
                                                    <li>
                                                        Building stable and maintainable codebases
                                                        using React and Next
                                                    </li>
                                                    <li>
                                                        Contributing with backend team, designing
                                                        database and structuring infrastructure
                                                    </li>
                                                    <li>
                                                        Developing front-end for 5+ websites and web
                                                        apps, using React.js, Next.js, Redux, and
                                                        Apollo.
                                                    </li>
                                                    <li>
                                                        Using skills in debugging to check code,
                                                        improve code and enhance the functionality
                                                        and user experience of web applications
                                                    </li>
                                                    <li>
                                                        Creating custom React.js components and
                                                        hooks.
                                                    </li>
                                                </ul>
                                            </div>
                                        </WorkIExperienceItem>
                                        <Fragment key={idx}>
                                            <WorkIExperienceItem {...w} />
                                        </Fragment>
                                    </>
                                );
                            }
                            return (
                                <Fragment key={idx}>
                                    <WorkIExperienceItem {...w} />
                                </Fragment>
                            );
                        })}
                    </Card>
                    <Card icon={<SkillIcon className="mx-2 h-7 w-7" />} title="Skils">
                        <div className="flex w-full flex-wrap">
                            {Skills.map((skill, idx) => {
                                return (
                                    <Fragment key={idx}>
                                        <SkillItem {...skill} />
                                    </Fragment>
                                );
                            })}
                        </div>
                    </Card>
                    <Card icon={<ProfileIcon className="mx-2 h-7 w-7" />} title="Hobbies">
                        <div className="flex w-full flex-wrap">
                            {hobbies.map((hobi, idx) => {
                                return (
                                    <Fragment key={idx}>
                                        <HobbyItem {...hobi} />
                                    </Fragment>
                                );
                            })}
                        </div>
                    </Card>
                    <Card
                        icon={<EducationIcon className="mx-2 scale-150 transform" />}
                        title="Education"
                    >
                        <div className="prose p-4 px-8">
                            <h3>AZAD ISLAMIC UNIVERSITY</h3>
                            <p>Bachelor's Operation Engineering</p>
                            <p>2013 to 2017</p>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}
