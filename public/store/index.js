/**
 * Created by Administrator on 2016/7/8.
 */

var Vue = require('vue');
var Vuex = require('vuex');

Vue.use(Vuex);

module.exports = new Vuex.Store({
    state: {
        docs: [],
        search_title: '',
        search_subject: ''
    },
    mutations: require('./mutation')
});
