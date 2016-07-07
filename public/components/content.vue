<template>
    <!-- content srart -->
    <div class="h-content">

        <article-component :docs.sync="docs" :search_words.sync="search_words" :search_time.sync="search_time" :search_pv.sync="search_pv"></article-component>
        <!--<rightbar-component></rightbar-component>-->
    </div>
    <!-- content end -->
</template>

<script>
    import Rihgtbar from './rightbar.vue'
    import Article from './article.vue'

    export default{
        props: ['docs', 'search_words', 'search_time', 'search_pv'],

        components: {
            'article-component': Article,
            'rightbar-component': Rihgtbar
        }
    }

</script>
