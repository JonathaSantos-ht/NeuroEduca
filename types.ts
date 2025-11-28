export interface Article {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    image: string;
}

export interface Activity {
    title: string;
    ageGroup: string;
    objective: string;
    materials: string[];
    steps: string[];
    neuroConcept: string; // The neuroscience behind it
}

export enum PageView {
    HOME = 'HOME',
    BLOG = 'BLOG',
    STRATEGIES = 'STRATEGIES',
    TOOLS = 'TOOLS',
    COURSES = 'COURSES',
    COMMUNITY = 'COMMUNITY',
    PREMIUM = 'PREMIUM',
    ABOUT = 'ABOUT',
    GLOSSARY = 'GLOSSARY',
    THANK_YOU = 'THANK_YOU',
    LOGIN = 'LOGIN',
    DASHBOARD = 'DASHBOARD'
}