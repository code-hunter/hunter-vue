<template>
    <!-- content srart -->
    <div class="h-content">

        <article-component></article-component>
        <!--<rightbar-component></rightbar-component>-->
    </div>
    <!-- content end -->
</template>

<script>
    import Rihgtbar from './rightbar.vue'
    import Article from './article.vue'

    export default{
//        props: ['docs', 'search_words', 'search_time', 'search_pv'],

        components: {
            'article-component': Article,
            'rightbar-component': Rihgtbar
        }
    }

</script>
