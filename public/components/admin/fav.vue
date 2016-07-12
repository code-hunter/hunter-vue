<template>
    <div>
        <header-component></header-component>
        <fav-component></fav-component>
        <footer-component></footer-component>
    </div>

</template>

<script>
    var Header =  require( './header.vue');
    var Fav = require('./_fav.vue');
    var Footer = require('./footer.vue');

    export default{

        components:{
            'header-component':Header,
            'fav-component': Fav,
            'footer-component': Footer
        }
    }
</script>
