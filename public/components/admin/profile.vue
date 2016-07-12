<template>
    <div>
        <header-component></header-component>
        <content-component></content-component>

        <footer-component></footer-component>
    </div>

</template>

<script>
    var Header =  require( './header.vue');
    var Content = require('./_profile.vue');
    var Footer = require('./footer.vue')

    export default{

        components:{
            'header-component':Header,
            'content-component':Content,
            'footer-component': Footer
        }
    }
</script>
