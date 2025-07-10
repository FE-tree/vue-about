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
            path: '/pages',
            name: 'Pages',
            component: () => import('./views/Effect.vue'),
            children: [
                { path: 'Login', name: 'Login', component: () => import('./pages/Login.vue') },
                { path: 'g2048', name: 'G2048', component: () => import('./pages/2048.vue') },
                { path: 'raffle', name: 'Raffle', component: () => import('./pages/raffle.vue') },
                { path: 'quill', name: 'Quill', component: () => import('./pages/quill.vue') },
                { path: 'signature', name: 'Signature', component: () => import('./pages/signature.vue')}
            ]
        },
        {
            path: '/packages',
            name: 'Packages',
            component: () => import('./views/Effect.vue'),
            children: [
                { path: 'MenuWX', name: 'MenuWX', component: () => import('./packages/MenuWX.vue') },
                { path: 'MenuComp', name: 'MenuComp', component: () => import('./packages/MenuComp.vue') },
                { path: 'recursion', name: 'recursion', component: () => import('./packages/recursion.vue') },
                { path: 'News', name: 'News', component: () => import('./packages/News.vue') },
                { path: 'PullRefresh', name: 'PullRefresh', component: () => import('./packages/PullRefresh.vue') },
                { path: 'DoubleScroll', name: 'DoubleScroll', component: () => import('./packages/DoubleScroll.vue') },
                { path: 'ScrollBottom', name: 'ScrollBottom', component: () => import('./packages/ScrollBottom.vue') },
                { path: 'Tabbar', name: 'Tabbar', component: () => import('./packages/Tabbar.vue') },
                { path: 'InstantSearch', name: 'InstantSearch', component: () => import('./packages/InstantSearch.vue') },
                { path: 'Slider', name: 'Slider', component: () => import('./packages/Slider.vue') },
                { path: 'Drag', name: 'Drag', component: () => import('./packages/Drag.vue') }
            ]
        },
        {
            path: '/effect',
            name: 'Effect',
            component: () => import('./views/Effect.vue'),
            children: [
                { path: 'DrippingWater', name: 'DrippingWater', component: () => import('./components/Effect/DrippingWater.vue') },
                { path: 'Progressbar', name: 'Progressbar', component: () => import('./components/Effect/Progressbar.vue') },
                { path: 'FaultText', name: 'FaultText', component: () => import('./components/Effect/FaultText.vue') },
                { path: 'Instagram', name: 'Instagram', component: () => import('./components/Effect/Instagram.vue') },
            ]
        }
    ]
})
