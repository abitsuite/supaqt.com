import { articlesKs, authorsKs, categoriesKs } from '@/lib/keystatic'
import { config } from '@keystatic/core'

export default config({
    storage: {
        kind: 'local',
    },
    ui: {
        brand: {
            name: 'SupaQt Alpha',
        },
        navigation: ['---', 'articles', '---', 'authors', 'categories'],
    },
    collections: {
        articles: articlesKs,
        authors: authorsKs,
        categories: categoriesKs,
    },
})
