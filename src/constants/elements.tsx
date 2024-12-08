
import {TRoutePath} from "./types";
import App from "../App.tsx";
import RecipePage from "../solutions/RecipePage.tsx";

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
    }
]

