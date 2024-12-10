import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
    logo: <span>Learn Git</span>,
    project: {
        link: 'https://github.com/Mikosztyla/git-course',
    },
    docsRepositoryBase: 'https://github.com/Mikosztyla/git-course/tree/main',
    feedback: {
        content: 'Coś się nie zgadza - daj mi znać!',
    },
    footer: {
        content: 'Przekonaj się, że Git tak naprawde jest git 😎',
    },
};

export default config;
