<template>
    <div class="admin-content">
        <div class="admin-content-body">
            <div class="am-cf am-padding am-padding-bottom-0">
                <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">我的收藏</strong> </div>
            </div>

            <hr/>

            <div v-if="docs">
                <div v-for="doc in docs" >

                    <article class="am-g blog-entry-article">

                        <div >
                            <h1 class="archive-font-size"><a href={{doc.url}} target="_blank">{{doc.title}}</a></h1>
                            <span><a href="" class="h-author">作者:{{doc.author}}&nbsp;</a></span>
                            <span>{{doc.published_time}}</span>
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

    </div>

</template>
<style>

</style>
<script>

    var $ = require('jquery');
    require("amazeui");

    var App = require('../../assets/js/app')
    var setDocs = require('../../store/action').setFavDocs;
    var docs = require('../../store/getter').fav_docs;

    export default{

        data() {
            return {
                page: 1
            }
        },

        created: function () {
            if (!App.checkLogin()) {
                window.location.href = '#/login';
                return;
            }

            this.$http.get('/archive/getFav?page=' +this.page+'&size=10').then(function (res) {

                if (res.data) {
                    this.setDocs(res.data);
                }

            })
        },
        vuex: {
            getters: {
                docs,
            },
            actions:{
                setDocs
            }
        },

        methods: {
            on_prev: function () {
                if(this.page == 1) {
                    alert('first page.');
                    return;
                }else {
                    this.page--;
                }

                this.$http.get('/archive/getFav?page=' +this.page+'&size=10').then(function (res) {
                    this.setDocs(res.data);
                })
            },
            on_next: function () {

                this.$http.get('/archive/getFav?page=' +this.page+'&size=10').then(function (res) {

                    //todo : fixed me to max page size
                    if((res.data).length <= 0) {
                        alert('last page.');
                        return;
                    }else {
                        this.setDocs(res.data);
                        this.page++;
                    }
                })
            },
        }
    }
</script>
