import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../App.vue')
            /* children: [
                {
                    path: '/',
                    name: 'home-view',
                    component: () => import('./pages/HomeView.vue')
                },
                {
                    path: '/game',
                    name: 'game-view',
                    component: () => import('./pages/GameView.vue')
                },
                {
                    path: '/end',
                    name: 'end-view',
                    component: () => import('./pages/EndView.vue')
                }
            ] */
        }
    ]
});
