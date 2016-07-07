<template>

    <header class="h-topbar">
        <h1 class="am-topbar-brand">
            <a href="#">hunter</a>
        </h1>

        <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only"
                data-am-collapse="{target: '#doc-topbar-collapse'}"><span class="am-sr-only">导航切换</span> <span
                class="am-icon-bars"></span></button>

        <div class="am-collapse am-topbar-collapse" id="doc-topbar-collapse">
            <ul class="am-nav am-nav-pills am-topbar-nav">
                <li class="am-active"><a href="#" @click="on_search_by_pv">最热</a></li>
                <li class="am-active"><a href="#" @click="on_search_by_time">最新</a></li>
                <li class="am-dropdown" data-am-dropdown>
                    <a class="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:;">
                        菜单 <span class="am-icon-caret-down"></span>
                    </a>
                    <ul class="am-dropdown-content">
                        <li class="am-dropdown-header">分类</li>
                        <li><a href="#">关于我们</a></li>
                        <li><a href="#">关于字体</a></li>
                        <li><a href="#">TIPS</a></li>
                    </ul>
                </li>
            </ul>

            <div class="am-topbar-right">
                <button @click="on_login" class="am-btn am-btn-primary am-topbar-btn am-btn-sm">登录/注册</button>
            </div>

            <div class="am-topbar-right">
                <div class="am-topbar-form am-topbar-left am-form-inline" role="search">
                    <div class="am-form-group">
                        <input type="text" class="am-form-field am-input-sm" v-model="search_words"  placeholder="搜索文章">
                    </div>
                    <button class="am-btn am-btn-default am-btn-sm" @click="on_search">搜索</button>
                </div>
            </div>

        </div>
    </header>

</template>

<script>

    export default{

        props: ['docs', 'search_words', 'search_time', 'search_pv'],

        methods: {
            on_login: function () {
                window.location.href = '#/login';
            },

            on_search: function () {
                this.search_time = 0;
                this.search_pv = 0;

                if(!this.search_words.trim()) {
                    return;
                }

                this.$http.get('/archive/getPage?page=1&size=10&search_words=' +this.search_words).then(function (res) {
                    if(res.data.length >= 0){
                        this.docs = res.data;
                    }else{
                        this.docs = [];
                    }

                })
            },

            on_search_by_time: function () {
                this.search_time = 1;
                this.search_pv = 0;
                this.search_words = '';
                this.$http.get('/archive/getPage?page=1&size=10&search_time='+this.search_time).then(function (res) {
                    this.docs = res.data;
                })
            },

            on_search_by_pv: function () {
                this.search_pv = 1;
                this.search_time = 0;
                this.search_words = '';
                this.$http.get('/archive/getPage?page=1&size=10&search_pv='+this.search_pv).then(function (res) {
                    this.docs = res.data;
                })
            }
        }
    }

</script>
