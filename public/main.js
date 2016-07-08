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
    }
});

router.start(App, '#app');
