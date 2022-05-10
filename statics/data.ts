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
        'title': 'Front-end developer',
        'date': 'Sep 2021 - Present ·',
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
            'Dream Come True has provided innovative ideas and income opportunities to live a life in balance.',
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
            'The company specializes in outsourcing web applications to businesses. As a full-stack developer.',
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
            'Idea Negar Sina Company was established in 2018 in the Internet industry / e-commerce / online services, medical services and health. In the field of consulting services in management and information technology .',
    },
];
export const Skills: SkillItemProps[] = [
    {
        title: 'Javascript/Typescript',
    },
    {
        title: 'React/Next.js',
    },
    {
        title: 'React Native',
    },
    {
        title: 'Nodejs',
    },
    {
        title: 'GraphQL/Rest',
    },
    {
        title: 'CSS/Tailwind',
    },
    {
        title: 'Wordpress',
    },
    { title: 'Team Management' },
];
export const hobbies: HobbyItemProps[] = [
    {
        title: 'Research',
        icon: SearchIcon,
    },
    {
        title: 'Traveling',

        icon: TravelingIcon,
    },
    {
        title: 'Photography',

        icon: PhotographyIcon,
    },
    {
        title: 'Music',

        icon: MusicIcon,
    },
    {
        title: 'Biking',

        icon: BikingIcon,
    },
    {
        title: 'Aid Working',

        icon: UserIcon,
    },
];
