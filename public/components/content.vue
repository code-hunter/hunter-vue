<template>
    <div class="h-content">
        <article-component></article-component>
    </div>
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
