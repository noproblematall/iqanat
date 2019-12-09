import VueRouter from 'vue-router';
import Vue from 'vue';

const TheHome = () => import(/* webpackChunkName: "home" */'./components/TheHome')
// import TheHome from './components/TheHome'
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            name: 'home',
            component: TheHome,
        },
        
    ]
});

export default router;