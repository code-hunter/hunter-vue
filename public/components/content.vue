<template>
    <!-- content srart -->
    <div class="am-g am-g-fixed blog-fixed archive-mid">

        <article-component></article-component>
        <!--<rightbar-component></rightbar-component>-->
    </div>
    <!-- content end -->
</template>

<script>
    import Rihgtbar from './rightbar.vue'
    import Article from './article.vue'

    export default{
        components: {
            'article-component': Article,
            'rightbar-component': Rihgtbar
        }
    }

</script>
