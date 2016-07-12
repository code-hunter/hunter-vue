/**
 * Created by Administrator on 2016/6/30.
 */
var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource')

var App = require('./components/app.vue')
var index = require('./components/index.vue')
var Login = require('./components/login.vue')
var Register = require('./components/register.vue')

var Fav = require('./components/admin/fav.vue')
var Profile = require('./components/admin/profile.vue')

Vue.use(VueResource);
Vue.use(VueRouter);

var router = new VueRouter();

router.map({
    '/login':{
        component: Login
    },
    '/': {
        component: index
    },
    '/register': {
        component: Register
    },
    '/profile': {
        component: Profile
    },
    '/fav' : {
        component: Fav
    },
    '/profile' : {
        component: Profile
    }
});

router.start(App, '#app');
