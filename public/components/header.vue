<template>

    <header class="h-topbar">
        <h1 class="am-topbar-brand">
            <a href="#">hunter</a>
        </h1>

        <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only"
                data-am-collapse="{target: '#doc-topbar-collapse'}"><span class="am-sr-only">导航切换</span> <span
                class="am-icon-bars"></span></button>

        <div class="h-header-ul am-topbar-collapse" id="doc-topbar-collapse">
            <ul class="am-nav am-nav-pills am-topbar-nav">
                <li class="am-active"><a href="#" @click="on_search_by_ai">人工智能</a></li>
                <li class="am-active"><a href="#" @click="on_search_by_invest">量化投资</a></li>
            </ul>

            <div v-if="isLogin">

                <div class="am-topbar-right" id="blog-collapse">
                    <ul class="am-nav am-nav-pills am-topbar-nav">
                        <li class="am-dropdown" data-am-dropdown>
                            <a class="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:;">
                                <img height="30" class="h-circle" src="../assets/i/favicon.png"> <span class="am-icon-caret-down"></span>
                            </a>
                            <ul class="am-dropdown-content">
                                <li><a href="#"><i class="am-icon-tachometer" aria-hidden="true"></i>&nbsp;&nbsp;账户</a></li>
                                <li><a href="#"><i class="am-icon-star" aria-hidden="true"></i>&nbsp;&nbsp;收藏</a></li>
                                <li><a href="#"><i class="am-icon-cog" aria-hidden="true"></i>&nbsp;&nbsp;设置</a></li>
                                <li><a href="#" @click="on_logout"><i class="am-icon-sign-out" aria-hidden="true"></i>&nbsp;&nbsp;退出</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div v-else>
                <div class="am-topbar-right">
                    <button class="am-btn am-btn-primary am-topbar-btn am-btn-sm"><a v-link="{path:'/login'}">登录</a>/<a v-link="{path:'/register'}">注册</a></button>
                </div>
            </div>

            <div class="am-topbar-right">
                <div class="am-topbar-form am-topbar-left am-form-inline" role="search">
                    <div class="am-form-group">
                        <input type="text" class="am-form-field am-input-sm" v-model="search_title"  placeholder="搜索文章">
                    </div>
                    <button class="am-btn am-btn-default am-btn-sm" @click="on_search">搜索</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

    require("amazeui");
    var App = require('../assets/js/app');
    var setDocs = require('../store/action').setDocs;
    var setSearchTitle = require('../store/action').setSearchTitle;
    var setSearchSubject = require('../store/action').setSearchSubject;

    export default{
        created: function () {
            this.isLogin = App.checkLogin();
            console.log("is login : " + this.isLogin);
        },

        data() {
            return {
                search_title: '',
                search_subject: '',
                isLogin: false
            };
        },

        vuex: {
            actions: {
                setDocs,
                setSearchTitle,
                setSearchSubject
            }
        },

        methods: {
            on_logout: function () {
                this.$http.get("/user/logout").then(function (res) {
                    window.location.href = '#/login';
                });
            },

            on_login: function () {
                window.location.href = '#/login';
            },

            on_search: function () {

                if (!this.search_title.trim()) {
                    return;
                }

                this.setSearchTitle(this.search_title);
                this.$http.get('/archive/getPage?page=1&size=10&search_title=' + this.search_title).then(function (res) {
                    if (res.data.length >= 0) {
                        this.setDocs(res.data);
                    } else {
                        this.setDocs([]);
                    }

                })
            },

            on_search_by_ai: function () {
                this.search_subject = 'ai';
                this.setSearchTitle('');
                this.setSearchSubject(this.search_subject);

                this.$http.get('/archive/getPage?page=1&size=10&search_subject=' + this.search_subject).then(function (res) {
                    this.docs = res.data;
                })
            },

            on_search_by_invest: function () {
                this.search_subject = 'invest';
                this.setSearchTitle('');
                this.setSearchSubject(this.search_subject);
                this.$http.get('/archive/getPage?page=1&size=10&search_subject=' + this.search_subject).then(function (res) {
                    this.docs = res.data;
                })
            }
        }
    };

</script>
