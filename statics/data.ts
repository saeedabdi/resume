import BikingIcon from 'assets/svg/biking.svg';
import MusicIcon from 'assets/svg/music.svg';
import PhotographyIcon from 'assets/svg/photography.svg';
import SearchIcon from 'assets/svg/search.svg';
import TravelingIcon from 'assets/svg/traveling.svg';
import UserIcon from 'assets/svg/user.svg';
import { HobbyItemProps } from 'components/pages/resume/hobbyItem';
import { SkillItemProps } from 'components/pages/resume/skillItem';

interface WorkExperienceItemInterface {
    title: string;
    date: string;
    location: string;
    subTitle: string;
    description: string;
    technologies: string[];
    projects?: { name: string; url: string }[];
}

export const WorkExperience: WorkExperienceItemInterface[] = [
    {
        title: 'Hasti Innovative Trading (HIT)',
        date: 'May 2022 - Present',
        location: 'Tehran , Iran',
        subTitle: 'Front-end developer',
        description:
            'As a front-end developer at Hasti Innovative Trading (HIT), a subsidiary of Golrang Industrial Group active in the eCommerce Industry, I was responsible for developing and maintaining a platform that is dedicated to facilitating selling and buying products that empower people to do business as well as, creating a new intelligent marketplace. I leveraged my expertise in React, Redux, TypeScript, Next.js, MonoRepo, Material-UI and Styled-Components to deliver high-quality, efficient and user-friendly solutions to our clients.',
        technologies: [
            'React',
            'Redux',
            'Typescript',
            'Next.js',
            'MonoRepo',
            'Material-UI',
            'Styled-Components',
        ],
    },
    {
        'title': 'Front-end developer',
        'date': 'Sep 2021 - May 2022 ·',
        'location': 'Dubai, United Arab Emirates',
        'subTitle': 'Dream Come True Information Technology',
        technologies: [
            'React',
            'Redux',
            'TypeScript',
            'React Native',
            'React Native Web',
            'React Router',
            'Redux Saga',
            'React Query',
            'Tailwind CSS',
            'Expo',
            'Ant Design',
            'Socket.io',
        ],
        'description':
            'At Dream Come True Information Technology, I served as a front-end developer where I was responsible for building and maintaining web and mobile applications. I utilized my skills in React, Redux, TypeScript, React Native, React Native Web, React Router, Redux Saga, React Query, Tailwind CSS, Expo, Ant Design and Socket.io to deliver innovative ideas and income opportunities to live a life in balance.',
    },
    {
        'title': 'Front-end developer',
        'date': 'March 2021 - Sep 2021 ·7 mos full-time and 6 mos part-time',
        'location': 'Tehran, Iran',
        technologies: [
            'React',
            'Redux',
            'TypeScript',
            'React Router',
            'Redux Saga',
            'Socket.io',
            'React Query',
            'Tailwind CSS',
        ],
        'subTitle': 'Sina Idea Graph',

        projects: [
            {
                name: 'Petro visit ',
                url: 'https://app.petrovisit.ir/',
            },
            {
                name: 'Sol app',
                url: 'http://app.solapp.ir/',
            },
            {
                name: 'Charisma',
                url: 'https://charisma.ovisit.ir/',
            },
            {
                name: 'Ovisit',
                url: 'https://ovisit.ir/',
            },
            {
                name: 'clinkan',
                url: 'http://clinikan.ovisit.ir/',
            },
        ],
        'description':
            'As a front-end developer at Sina Idea Graph, a company established in 2018 in the Internet industry/ e-commerce/ online services, medical services and health, I was responsible for developing and maintaining web applications. I leveraged my expertise in React, Redux, TypeScript, React Router, Redux Saga, Socket.io, React Query and Tailwind CSS to deliver high-quality, efficient and user-friendly solutions to our clients. My notable projects include Petro visit (https://app.petrovisit.ir/), Sol app (http://app.solapp.ir/), Charisma (https://charisma.ovisit.ir/), Ovisit (https://ovisit.ir/), and Clinikan (http://clinikan.ovisit.ir/)',
    },
    {
        'title': 'Head of front-end development',
        'date': 'Feb 2021 - Jul 2021 · 6 mos part-time',
        'location': 'Tehran, Iran',
        'subTitle': 'Cloudware',
        technologies: [
            'React',
            'Redux',
            'TypeScript',
            'Next.js',
            'React Router',
            'Redux Saga',
            'React Query',
            'Tailwind CSS',
        ],
        projects: [
            {
                name: 'Pars toy',
                url: 'http://parstoy.ir/',
            },
            {
                name: 'kookbaz',
                url: 'http://kookbaz.ir/',
            },
            {
                name: 'ekaala',
                url: 'https://ekaala.ir/',
            },
            {
                name: 'bitbox',
                url: 'http://bitboxclient.cloudbuilder.ir/',
            },
        ],
        'description':
            'As the head of front-end development at Cloudware, a company that specializes in outsourcing web applications to businesses, I was responsible for leading a team of front-end developers in building and maintaining web applications. I leveraged my expertise in React, Redux, TypeScript, Next.js, React Router, Redux Saga, React Query, and Tailwind CSS to deliver high-quality, efficient and user-friendly solutions to our clients. My notable projects include Pars toy (http://parstoy.ir/), Kookbaz (http://kookbaz.ir/), Ekaala (https://ekaala.ir/), and Bitbox (http://bitboxclient.cloudbuilder.ir/).',
    },
    {
        'title': 'FreeLancer',
        'date': '-',
        'location': 'Tehran, Iran',
        'subTitle': 'Freelancer',
        technologies: ['TypeOrm', 'Angular', 'Vue', 'NodeJS', 'Express', 'MongoDB', 'PostgreSQL'],
        'description':
            'As a freelancer, I have taken on various projects across different industries and technologies. My notable projects include TypeOrm, Angular,...',
    },
];
export const Skills: SkillItemProps[] = [
    {
        title: 'JavaScript/TypeScript',
        description:
            'Expertise in building large-scale web applications using JavaScript and TypeScript. Strong experience with popular libraries and frameworks including React, Next.js, Angular, and Vue.js',
    },
    {
        title: 'React/Next.js',
        description:
            'Expertise in building web applications using React and Next.js. Strong experience with popular libraries and frameworks including Redux, Apollo Client, and Material-UI.',
    },
    {
        title: 'React Native',
        description:
            'Experience building mobile applications using React Native. Strong experience with popular libraries and frameworks including React Navigation, Expo, and Redux.',
    },
    {
        title: 'Node.js',
        description:
            'Experience building web applications using Node.js. Strong experience with popular libraries and frameworks including Express.js, GraphQL and Rest',
    },
    {
        title: 'CSS/Tailwind',
        description:
            'Expertise in creating responsive and visually appealing layouts using CSS and Tailwind',
    },
    {
        title: 'Angular',
        description:
            'Experience building web applications using Angular. Strong experience with popular libraries and frameworks including Angular Material and NgRx',
    },
    {
        title: 'WordPress',
        description: 'Experience building and customizing websites using WordPress',
    },
    {
        title: 'Team Management',
        description:
            'Experience leading and managing development teams, working with project managers, and ensuring timely delivery of high-quality solutions',
    },
];
export const hobbies: HobbyItemProps[] = [
    {
        title: 'Research',
        description:
            'Interest in researching new technologies and staying up to date with the latest developments in the field of web development.',
        icon: SearchIcon,
    },
    {
        title: 'Traveling',
        description:
            'I enjoy exploring new cultures and countries, and I have visited more than 10 countries so far. I am also a member of a traveling group.',
        icon: TravelingIcon,
    },
    {
        title: 'Photography',
        description: `I have a passion for photography, particularly in nature and landscape photography. I've had my photos featured in several online photography galleries and won a few photography competitions.`,
        icon: PhotographyIcon,
    },
    {
        title: 'Music',
        description: 'I enjoy listening to music and I am a member of a music band.',
        icon: MusicIcon,
    },
    {
        title: 'Biking',
        description: `I enjoy cycling and have completed several long-distance bike rides, including a charity ride for a local children's hospital.`,
        icon: BikingIcon,
    },
    {
        title: 'Aid Working',
        description:
            'I am passionate about helping others and have volunteered with several local aid organizations, including a few projects as a project manager.',
        icon: UserIcon,
    },
];
