/**
 * Created by Administrator on 2016/6/30.
 */
var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource')

var App = require('./components/app.archive.vue')

Vue.use(VueResource);
Vue.use(VueRouter);

var router = new VueRouter();

router.map({
    '/': {
        component: App
    }
});

router.start(App, '#app');
