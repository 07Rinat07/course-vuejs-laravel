
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/people', component: ()=> import('./components/Person/Index.vue'),
            name: 'person.index'
        },
        {
            path: '/people/create', component: ()=> import('./components/Person/Create.vue'),
            name: 'person.create'
        },
    ]
})

