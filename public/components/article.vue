<template>
    <div class="am-u-md-8 am-u-sm-12">

        <div v-if="docs">
            <div v-for="doc in docs" >

                <article class="am-g blog-entry-article">
                    <!--<div class="am-u-lg-6 am-u-md-12 am-u-sm-12 blog-entry-img">-->
                        <!--<img src="/assets/i/f10.jpg" alt="" class="am-u-sm-12">-->
                    <!--</div>-->

                    <div class="am-u-lg-6 am-u-md-12 am-u-sm-12 blog-entry-text">

                        <h1><a href={{doc.url}} target="_blank">{{doc.title}}</a></h1>
                        <span><a href="" class="blog-color">作者:{{doc.author}}&nbsp;</a></span>
                        <span>{{doc.published_time}}</span>
                        <p>{{doc.summary}}
                        </p>
                        <p><a href="" class="blog-continue">continue reading</a></p>
                    </div>

                </article>

            </div>
        </div>
        <div v-else>
            <a>no docs</a>
        </div>

        <ul class="am-pagination">
            <li class="am-pagination-prev"><a href="">&laquo; Prev</a></li>
            <li class="am-pagination-next"><a href="">Next &raquo;</a></li>
        </ul>
    </div>
</template>

<style src="../assets/css/amazeui.min.css"></style>
<style src="../assets/css/app.css"></style>

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
