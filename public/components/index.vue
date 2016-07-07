<template>
    <div>
        <header-component :docs.sync="docs" :search_words.sync="search_words"></header-component>
        <content-component :docs.sync="docs" :search_words.sync="search_words"></content-component>
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
                search_words: ''
            }
        },
        components: {
            'header-component': Header,
            'content-component': Content,
            'footer-component': Footer
        }
    }

</script>
