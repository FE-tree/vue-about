import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/effect',
            name: 'Effect',
            component: () => import('./views/Effect.vue'),
            children: [
                { path: 'DrippingWater', name: 'DrippingWater', component: () => import('./components/DrippingWater.vue') },
                { path: 'Progressbar', name: 'Progressbar', component: () => import('./components/Progressbar.vue') },
                { path: 'FaultText', name: 'FaultText', component: () => import('./components/FaultText.vue') },
                { path: 'Instagram', name: 'Instagram', component: () => import('./components/Instagram.vue') },

            ]
        }
    ]
})
