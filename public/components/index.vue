<template>
    <div>
        <header-component :docs.sync="docs" :search_words.sync="search_words" :search_time.sync="search_time" :search_pv.sync="search_pv"></header-component>
        <content-component :docs.sync="docs" :search_words.sync="search_words" :search_time.sync="search_time" :search_pv.sync="search_pv"></content-component>
        <footer-component></footer-component>
    </div>
</template>

<style src="../assets/css/amazeui.min.css"></style>
<style src="../assets/css/app.css"></style>

<script>
    import Header from './header.vue'
    import Content from './content.vue'
    import Footer from './footer.vue'

    export default{
        data(){
            return {
                docs: [],
                search_words: '',
                search_time: 0,
                search_pv : 0
            }
        },
        components: {
            'header-component': Header,
            'content-component': Content,
            'footer-component': Footer
        }
    }

</script>
