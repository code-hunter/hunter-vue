<template>
    <!--<hr>-->
    <!--&lt;!&ndash; nav start &ndash;&gt;-->
    <!--<nav class="am-g am-g-fixed blog-fixed blog-nav">-->
        <!--<button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only blog-button" data-am-collapse="{target: '#blog-collapse'}" ><span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span></button>-->

        <!--<div class="am-collapse am-topbar-collapse" id="blog-collapse">-->
            <!--<ul class="am-nav am-nav-pills am-topbar-nav">-->
                <!--<li class="am-active"><a href="lw-index.html">首页</a></li>-->
                <!--<li class="am-dropdown" data-am-dropdown>-->
                    <!--<a class="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:;">-->
                        <!--首页布局 <span class="am-icon-caret-down"></span>-->
                    <!--</a>-->
                    <!--<ul class="am-dropdown-content">-->
                        <!--<li><a href="lw-index.html">1. blog-index-standard</a></li>-->
                        <!--<li><a href="lw-index-nosidebar.html">2. blog-index-nosidebar</a></li>-->
                        <!--<li><a href="lw-index-center.html">3. blog-index-layout</a></li>-->
                        <!--<li><a href="lw-index-noslider.html">4. blog-index-noslider</a></li>-->
                    <!--</ul>-->
                <!--</li>-->
                <!--<li><a href="lw-article.html">标准文章</a></li>-->
                <!--<li><a href="lw-img.html">图片库</a></li>-->
                <!--<li><a href="lw-article-fullwidth.html">全宽页面</a></li>-->
                <!--<li><a href="lw-timeline.html">存档</a></li>-->
            <!--</ul>-->
            <!--<form class="am-topbar-form am-topbar-right am-form-inline" role="search">-->
                <!--<div class="am-form-group">-->
                    <!--<input type="text" class="am-form-field am-input-sm" placeholder="搜索">-->
                <!--</div>-->
            <!--</form>-->
        <!--</div>-->
    <!--</nav>-->
    <!--<hr>-->

    <header class="am-topbar">
        <h1 class="am-topbar-brand">
            <a href="#">hunter</a>
        </h1>

        <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only"
                data-am-collapse="{target: '#doc-topbar-collapse'}"><span class="am-sr-only">导航切换</span> <span
                class="am-icon-bars"></span></button>

        <div class="am-collapse am-topbar-collapse" id="doc-topbar-collapse">
            <ul class="am-nav am-nav-pills am-topbar-nav">
                <li class="am-active"><a href="#">前端</a></li>
                <li><a href="#"></a>后台</li>
                <li class="am-dropdown" data-am-dropdown>
                    <a class="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:;">
                        菜单 <span class="am-icon-caret-down"></span>
                    </a>
                    <ul class="am-dropdown-content">
                        <li class="am-dropdown-header">标题</li>
                        <li><a href="#">关于我们</a></li>
                        <li><a href="#">关于字体</a></li>
                        <li><a href="#">TIPS</a></li>
                    </ul>
                </li>
            </ul>

            <form class="am-topbar-form am-topbar-left am-form-inline am-topbar-right" role="search">
                <div class="am-form-group">
                    <input type="text" class="am-form-field am-input-sm" placeholder="搜索文章">
                </div>
                <button type="submit" class="am-btn am-btn-default am-btn-sm">搜索</button>
            </form>

        </div>
    </header>

</template>

<style src="../assets/css/amazeui.min.css"></style>
<style src="../assets/css/app.css"></style>

<script>

</script>
