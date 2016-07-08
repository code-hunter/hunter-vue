<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<style src="../assets/css/amazeui.min.css"></style>
<style src="../assets/css/app.css"></style>
<style src="../assets/css/hunter.css"></style>


<script>
    var store = require('../store');
    module.exports = {
        store: store
    };

</script>