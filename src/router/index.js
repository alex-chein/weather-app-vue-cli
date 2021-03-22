import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home';
import About from '../pages/About';
import Help from '../pages/Help';
import NotFound from '../pages/NotFound';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/help', component: Help },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

export default router;