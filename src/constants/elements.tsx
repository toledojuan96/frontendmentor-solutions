
import {TRoutePath} from "./types";
import App from "../App.tsx";
import RecipePage from "../solutions/RecipePage.tsx";
import SocialLinksProfile from "../solutions/SocialLinksProfile.tsx";
import BlogPreviewCard from "../solutions/BlogPreviewCard.tsx";
import FaqAccordion from "../solutions/FaqAccordion.tsx";
import WorkitLandingPage from "../solutions/WorkitLandingPage.tsx";
import ResultsSummary from "../solutions/ResultsSummary.tsx";
import ProductPreviewCard from "../solutions/productPreviewCard.tsx";

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
    },
    {
        title: 'FAQ Accordion',
        path: '/faq-accordion-wyfFdeBwBz',
        component: <FaqAccordion/>
    },
    {
        title: 'Workit Landing Page',
        path: '/workit-landing-page-2fYnyle5lu',
        component: <WorkitLandingPage/>
    },
    {
        title: 'Results Summary',
        path: '/results-summary-component-CE_K6s0maV',
        component: <ResultsSummary/>
    },
    {
        title: 'Product Preview Card',
        path: '/product-preview-card-component-GO7UmttRfa',
        component: <ProductPreviewCard/>
    }
]

