<template>
    <div class="am-u-md-8 am-u-sm-12">

        <div v-if="docs">
            <div v-for="doc in docs" >

                <article class="am-g blog-entry-article">
                    <!--<div class="am-u-lg-6 am-u-md-12 am-u-sm-12 blog-entry-img">-->
                        <!--<img src="/assets/i/f10.jpg" alt="" class="am-u-sm-12">-->
                    <!--</div>-->

                    <div class="am-u-lg-12 am-u-md-12 am-u-sm-12 blog-entry-text">

                        <h1 class="archive-font-size"><a href={{doc.url}} target="_blank">{{doc.title}}</a></h1>
                        <span><a href="" class="blog-color">作者:{{doc.author}}&nbsp;</a></span>
                        <span>{{doc.published_time}}</span>
                        <p>{{doc.summary}}
                        </p>
                        <!--<p><a href="" class="blog-continue">continue reading</a></p>-->
                    </div>

                </article>

            </div>
        </div>
        <div v-else>
            <a>no docs</a>
        </div>

        <ul class="am-pagination">
            <li class="am-pagination-prev"><a href="javascript:scroll(0,0)" @click="on_prev">&laquo; Prev</a></li>
            <li class="am-pagination-next"><a href="javascript:scroll(0,0)" @click="on_next">Next &raquo;</a></li>
        </ul>
    </div>
</template>

<style src="../assets/css/amazeui.min.css"></style>
<style src="../assets/css/app.css"></style>

<script>

    export default{
        data() {
            return {docs : [],
                    page : 1}
        },
        created: function () {

            this.$http.get('/archive/getPage?page=1&size=10').then(function (res) {
                this.docs = res.data;
            })
        },
        methods: {
            on_prev: function () {
                if(this.page == 1) {
                    alert('first page.');
                    return;
                }else {
                    this.page--;
                }

                this.$http.get('/archive/getPage?page=' +this.page+'&size=10').then(function (res) {
                    this.docs = res.data;
                })
            },
            on_next: function () {
                this.page++;
                this.$http.get('/archive/getPage?page=' +this.page+'&size=10').then(function (res) {

                    //todo : fixed me to max page size
                    if((res.data).length <= 0) {
                        alert('last page.');
                        return;
                    }else {
                        this.docs = res.data
                    }
                })
            }
        }

    }

</script>
