/**
 * Created by Administrator on 2016/7/8.
 */

var Vue = require('vue');
var Vuex = require('vuex');

Vue.use(Vuex);

module.exports = new Vuex.Store({
    state: {
        fav_docs: [],
        docs: [],
        search_title: '',
        search_subject: ''
    },
    mutations: require('./mutation')
});
