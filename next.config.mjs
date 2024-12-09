import nextra from 'nextra';

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
    latex: true,
    defaultShowCopyCode: true,
});

export default withNextra({
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
});
