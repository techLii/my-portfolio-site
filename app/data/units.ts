export interface Unit {
    slug: string;
    title: string;
    description: string;
    content: string;
}

export const units: Unit[] = [
    {
        slug: 'introduction-to-web-development',
        title: 'Introduction to Web Development',
        description: 'Learn the basics of how the web works, HTML, and CSS.',
        content: 'This unit covers the fundamental building blocks of the web...'
    },
    {
        slug: 'javascript-fundamentals',
        title: 'JavaScript Fundamentals',
        description: 'Master the core concepts of JavaScript programming.',
        content: 'In this unit, we dive deep into variables, functions, loops, and more...'
    },
    {
        slug: 'react-basics',
        title: 'React Basics',
        description: 'Get started with building interactive UIs using React.',
        content: 'Learn about components, props, state, and hooks in React...'
    }
];
