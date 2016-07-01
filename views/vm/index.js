/**
 * Created by Administrator on 2016/6/30.
 */
var Vue = require('vue')
var Index = require('.././app.test.vue')

var vm = new Vue({
    el: "body",
    components:{
        index: Index   
    }
});