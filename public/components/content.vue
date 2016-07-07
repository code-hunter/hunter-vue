<template>
    <!-- content srart -->
    <div class="h-content">

        <article-component :docs.sync="docs" :search_words.sync="search_words"></article-component>
        <!--<rightbar-component></rightbar-component>-->
    </div>
    <!-- content end -->
</template>

<script>
    import Rihgtbar from './rightbar.vue'
    import Article from './article.vue'

    export default{
        props: [
            'docs' ,
            'search_words'
        ],

        components: {
            'article-component': Article,
            'rightbar-component': Rihgtbar
        }
    }

</script>
