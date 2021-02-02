import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Works from '@/pages/Works'
import Admin from '@/pages/Admin'
import Create from '@/pages/Create'

import Sites from '@/pages/Services/Sites'
import Design from '@/pages/Services/Design';
import Mobile from '@/pages/Services/Mobile';
import Video from '@/pages/Services/Video';
import ThreeD from '@/pages/Services/ThreeD';
import SMM from '@/pages/Services/SMM';


Vue.use(Router)

const auth = localStorage.getItem('jwt')

let router;

console.log(auth)

if(auth){
    router = new Router({
        mode:'history',
        routes:[
            {
                path:'/',
                component:Home
            },
            {
                path:'/service/sites',
                component:Sites,
            },
            {
                path:'/service/mobile',
                component:Mobile,
            },
            {
                path:'/service/design',
                component:Design,
            },
            {
                path:'/service/video',
                component:Video,
            },
            {
                path:'/service/3D',
                component:ThreeD,
            },
            {
                path:'/service/smm',
                component:SMM,
            },
            {
                path:'/portfolio',
                component:Works
            },
            {
                path:'/admin',
                component:Admin
            },
            {
                path:'/admin/reg',
                component:Create
            },
        ],
        scrollBehavior(){
            return {x:0,y:0}
        }
    })
    
}

router = new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/service/sites',
            component:Sites,
        },
        {
            path:'/service/mobile',
            component:Mobile,
        },
        {
            path:'/service/design',
            component:Design,
        },
        {
            path:'/service/video',
            component:Video,
        },
        {
            path:'/service/3D',
            component:ThreeD,
        },
        {
            path:'/service/smm',
            component:SMM,
        },
        {
            path:'/portfolio',
            component:Works
        },
        {
            path:'/admin',
            component:Admin
        },
        
    ],
    scrollBehavior(){
        return {x:0,y:0}
    }
})


export default router

