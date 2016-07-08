<template>
    <div>

        <div v-if="docs">
            <div v-for="doc in docs" >

                <article class="am-g blog-entry-article">

                    <div >
                        <h1 class="archive-font-size"><a href={{doc.url}} target="_blank">{{doc.title}}</a></h1>
                        <span><a href="" class="h-author">作者:{{doc.author}}&nbsp;</a></span>
                        <span>{{doc.published_time}}</span>
                        <p>{{doc.summary}}
                        </p>
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


<script>

    var setDocs = require('../store/action').setDocs;
    var docs = require('../store/getter').docs;
    var search_title = require('../store/getter').search_title;
    var search_subject = require('../store/getter').search_subject;

    export default{

        data() {
            return {
                page : 1
            }
        },
        created: function () {

            this.$http.get('/archive/getPage?page=1&size=10').then(function (res) {
                this.setDocs(res.data);
            })
        },
        vuex: {
            getters: {
                docs,
                search_title,
                search_subject
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

                this.$http.get('/archive/getPage?page=' +this.page+'&size=10&search_title=' +this.search_title+'&search_subject='+this.search_subject).then(function (res) {
                    this.setDocs(res.data);
                })
            },
            on_next: function () {

                this.$http.get('/archive/getPage?page=' +this.page+'&size=10&search_title=' +this.search_title+'&search_subject='+this.search_subject).then(function (res) {

                    //todo : fixed me to max page size
                    if((res.data).length <= 0) {
                        alert('last page.');
                        return;
                    }else {
                        this.setDocs(res.data);
                        this.page++;
                    }
                })
            }
        }
    }

</script>
