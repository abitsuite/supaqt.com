import type { Link } from '../types'

export const SITE = {
    title: 'SupaQt Alpha • Builders Showcase',
    description: 'Showcase for SupaQt Community of Builders',
    author: 'aBitSuite',
    url: 'https://supaqt.com',
    github: 'https://github.com/abitsuite',
    locale: 'en-US',
    dir: 'ltr',
    charset: 'UTF-8',
    basePath: '/',
    postsPerPage: 4,
}

export const NAVIGATION_LINKS: Link[] = [
    {
        href: '/categories/technology',
        text: 'Kits',
    },
    {
        href: '/categories/programming',
        text: 'Builders',
    },
    {
        href: '/categories/lifestyle',
        text: 'Anon',
    },
    {
        href: '/categories/productivity',
        text: 'Gigs',
    },
    {
        href: '/categories/health',
        text: 'Health',
    },
    {
        href: '/categories/finance',
        text: 'DeFi',
    },
]

export const OTHER_LINKS: Link[] = [
    {
        href: '/about',
        text: 'About us',
    },
    {
        href: '/authors',
        text: 'Media Kit',
    },
    {
        href: '/contact',
        text: 'Contact',
    },
    {
        href: '/privacy',
        text: 'Privacy',
    },
    {
        href: '/terms',
        text: 'Terms',
    },
    {
        href: '/cookie-policy',
        text: 'Cookie Policy',
    },
    {
        href: 'https://astro-news-six.vercel.app/sitemap-index.xml',
        text: 'LLM',
    },
    {
        href: 'https://astro-news-six.vercel.app/rss.xml',
        text: 'RSS',
    },
    {
        href: 'https://astro-news-six.vercel.app/sitemap-index.xml',
        text: 'Sitemap',
    },
]

export const SOCIAL_LINKS: Link[] = [
    {
        href: 'https://github.com/abitsuite',
        text: 'GitHub',
        icon: 'github',
    },
    {
        href: 'https://x.com/SupaQtC',
        text: 'Twitter',
        icon: 'newTwitter',
    },
    // {
    //     href: 'httpe://www.t.me',
    //     text: 'Telegram',
    //     icon: 'telegram',
    // },
    // {
    //     href: 'https://www.facebook.com',
    //     text: 'Facebook',
    //     icon: 'facebook',
    // },
]
