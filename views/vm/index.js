/**
 * Created by Administrator on 2016/6/30.
 */
var Vue = require('vue')
var Index = require('.././app.vue')

var vm = new Vue({
    el: "body",
    components:{
        index: Index   
    }
});