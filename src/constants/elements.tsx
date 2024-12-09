
import {TRoutePath} from "./types";
import App from "../App.tsx";
import RecipePage from "../solutions/RecipePage.tsx";
import SocialLinksProfile from "../solutions/SocialLinksProfile.tsx";
import BlogPreviewCard from "../solutions/BlogPreviewCard.tsx";

export const PATHS: TRoutePath[] = [
    {
        path: '/',
        title: 'Home',
        component: <App/>
    },
    {
        title: 'Recipe Page',
        path: '/recipe-page-KiTsR8QQKm',
        component: <RecipePage/>
    },
    {
        title: 'Social Links Profile',
        path: '/social-links-profile-UG32l9m6dQ',
        component: <SocialLinksProfile/>
    },
    {
        title: 'Blog Preview Card',
        path: '/blog-preview-card-ckPaj01IcS',
        component: <BlogPreviewCard/>
    }
]

