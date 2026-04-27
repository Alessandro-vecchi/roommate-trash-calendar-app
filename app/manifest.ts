import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Roommate Trash Calendar',
        short_name: 'Trash Schedule',
        description: 'Manage trash schedules with roommates',
        start_url: '/',
        display: 'standalone',
        background_color: '#fafafa', // Updated modern background color
        theme_color: '#18181b',      // Updated modern theme color
        icons: [{
            src: '/icon-light-32x32.png',
            sizes: '32x32',
            type: 'image/png',
        },
        {
            src: '/icon-light-32x32.png',
            sizes: '32x32',
            type: 'image/png',
        },
        {
            src: '/icon-dark-32x32.png',
            sizes: '32x32',
            type: 'image/png',
        },
        {
            src: '/icon.svg',
            sizes: '32x32',
            type: 'image/svg+xml',
        },

        ],
    }
}
