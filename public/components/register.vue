<template>
    <header>
        <div class="log-header">
            <h1><a href="/">hunter</a> </h1>
        </div>
        <div class="log-re">
            <button type="button" class="am-btn am-btn-default am-radius log-button" v-link="{path:'/login'}">登 录</button>
        </div>
    </header>

    <div class="log">
        <div class="am-g">
            <div class="am-u-lg-3 am-u-md-6 am-u-sm-8 am-u-sm-centered log-content">
                <h1 class="log-title am-animation-slide-top">AmazeUI</h1>
                <br>
                <form class="am-form" id="log-form">
                    <div class="am-input-group am-radius am-animation-slide-left">
                        <input v-model="user_name" type="email" id="doc-vld-email-2-1" class="am-radius" data-validation-message="请输入正确邮箱地址" placeholder="邮箱" required/>
                        <span class="am-input-group-label log-icon am-radius"><i class="am-icon-user am-icon-sm am-icon-fw"></i></span>
                    </div>
                    <br>
                    <div class="am-input-group am-animation-slide-left log-animation-delay">
                        <input v-model="pwd" type="password" id="log-password" class="am-form-field am-radius log-input" placeholder="密码" minlength="5" required>
                        <span class="am-input-group-label log-icon am-radius"><i class="am-icon-lock am-icon-sm am-icon-fw"></i></span>
                    </div>
                    <br>
                    <div class="am-input-group am-animation-slide-left log-animation-delay-a">
                        <input id="r_pwd" v-model="r_pwd" type="password" data-equal-to="#log-password" class="am-form-field am-radius log-input" placeholder="确认密码" data-validation-message="请确认密码一致" required>
                        <span class="am-input-group-label log-icon am-radius"><i class="am-icon-lock am-icon-sm am-icon-fw"></i></span>
                    </div>
                    <br>
                    <button type="submit" @click="on_re" class="am-btn am-btn-primary am-btn-block am-btn-lg am-radius am-animation-slide-bottom log-animation-delay-b">注 册</button>
                    <br>
                    <div class="am-btn-group am-animation-slide-bottom log-animation-delay-b">
                        <p>支持第三方注册</p>
                        <a href="#" class="am-btn am-btn-secondary am-btn-sm"><i class="am-icon-github am-icon-sm"></i> Github</a>
                        <a href="#" class="am-btn am-btn-success am-btn-sm"><i class="am-icon-google-plus-square am-icon-sm"></i> Google+</a>
                        <a href="#" class="am-btn am-btn-primary am-btn-sm"><i class="am-icon-stack-overflow am-icon-sm"></i> stackOverflow</a>
                    </div>
                </form>
            </div>
        </div>
    </div>





</template>
<script>
    require("amazeui");
    var $ = require("jquery");

    export default{
        data() {
            return {
                user_name: '',
                pwd: '',
                r_pwd:''
            }
        },
        methods: {
            on_re: function (e) {
                var vue = this;
                var vd = $('#log-form').validator({
                    onValid: function(validity) {
                        $(validity.field).closest('.am-input-group').find('.am-alert').hide();
                    },

                    onInValid: function(validity) {
                        debugger;
                        var $field = $(validity.field);
                        var $group = $field.closest('.am-input-group');
                        var $alert = $group.find('.am-alert');
                        // 使用自定义的提示信息 或 插件内置的提示信息
                        var msg = $field.data('validationMessage') || this.getValidationMessage(validity);

                        if (!$alert.length) {
                            $alert = $('<div class="log-alert am-alert am-alert-danger am-radius"></div>').hide().
                            appendTo($group);
                        }
                        $alert.html(msg).show();
                    },
                    submit: function () {

                        var v = this;

                        if(!this.isFormValid()) {
                            return;
                        }
                        console.log(" user_name : " + vue.user_name + ", pwd : "+vue.pwd + ", r_pwd : " + vue.r_pwd);
                        vue.$http({
                            url: '/user/re',
                            method: 'POST',
                            emulateJSON: true,
                            data: {
                                user_name: vue.user_name,
                                pwd: vue.pwd
                            }
                        }).then(function (res) {
                            debugger;

                            var $group = $($("#doc-vld-email-2-1")).closest('.am-input-group');
                            var $alert = $group.find('.am-alert');

                            if (!$alert.length) {
                                $alert = $('<div class="log-alert am-alert am-alert-danger am-radius"></div>').hide().
                                appendTo($group);
                            }
                            if(res.data.status == "fail") {
                                if(res.data.code == "0001"){
                                    $alert.html("用户已存在").show();
                                }
                            }else{
                                window.location.href = '#/';
                            }
                        });
                    }
                });
            },
        }
    }
</script>
