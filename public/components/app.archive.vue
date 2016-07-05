<template>
    <div>
        <h3>archive page list:</h3>
        <div>
            <ul v-if="docs">
                <li v-for="doc in docs" >
                    <a v-link="doc.url ">{{doc.title }}</a>
                </li>
            </ul>
            <ul v-else>
                <a>no docs</a>
            </ul>
        </div>
    </div>
</template>
<style>

</style>
<script>

    export default{
        data() {
            return {docs : []}
        },
        created: function () {

            this.$http.get('/archive/mongodb').then(function (res) {
                this.docs = res.data;
            })
        }
    }
</script>
