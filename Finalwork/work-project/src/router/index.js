import Vue from 'vue'
import Router from 'vue-router'

import BlogPage from '@/pages/BlogPage.vue'
import HomePage from '@/pages/HomePage.vue'
import ProjectPage from '@/pages/ProjectPage.vue'
import PageError404 from '@/pages/PageError404.vue';
import BlogDetails from '@/pages/BlogDetails.vue'
import ProjectDetails from '@/pages/ProjectDetails.vue'



Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path:'/',
            name:'home',
            component: HomePage
        },

        {
            path:'/blog/:pageNumber?',
            name:'blog',
            component: BlogPage
        },
        {
            path:'/articles',
            name:'articles',
            component: BlogDetails
        },

        {
            path:'/project/:pageNumber?',
            name:'project',
            component: ProjectPage
        },
        {
            path:'/about',
            name:'project-details',
            component: ProjectDetails
        },
        // {
        //     path:'/project/details/about',
        //     name:'project-slider',
        //     component: ProjectSlider
        // },
        
        {
            path:'/404',
            name:'404',
            component: PageError404
        },
     


        {
            path:'*',
            redirect:'404',
        },

    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
      }
    

})