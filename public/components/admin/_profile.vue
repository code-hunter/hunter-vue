<template>
    <div class="admin-content">
        <div class="admin-content-body">
            <div class="am-cf am-padding am-padding-bottom-0">
                <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">个人资料</strong> </div>
            </div>


            <hr/>

            <div class="am-g">
                <div class="am-u-sm-12 am-u-md-4 am-u-md-push-8">
                    <div class="am-panel am-panel-default">
                        <div class="am-panel-bd">
                            <div class="am-g">
                                <div class="am-u-md-4">
                                    <img class="am-img-circle am-img-thumbnail" src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/200/h/200/q/80" alt=""/>
                                </div>
                                <div class="am-u-md-8">
                                    <p>你可以使用<a href="#">gravatar.com</a>提供的头像或者使用本地上传头像。 </p>
                                    <form class="am-form">
                                        <div class="am-form-group">
                                            <input type="file" id="user-pic">
                                            <p class="am-form-help">请选择要上传的文件...</p>
                                            <button type="button" class="am-btn am-btn-primary am-btn-xs">保存</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="am-panel am-panel-default">
                        <div class="am-panel-bd">
                            <div class="user-info">
                                <p>等级信息</p>
                                <div class="am-progress am-progress-sm">
                                    <div class="am-progress-bar" style="width: 60%"></div>
                                </div>
                                <p class="user-info-order">当前等级：<strong>LV8</strong> 活跃天数：<strong>587</strong> 距离下一级别：<strong>160</strong></p>
                            </div>
                            <div class="user-info">
                                <p>信用信息</p>
                                <div class="am-progress am-progress-sm">
                                    <div class="am-progress-bar am-progress-bar-success" style="width: 80%"></div>
                                </div>
                                <p class="user-info-order">信用等级：正常当前 信用积分：<strong>80</strong></p>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="am-u-sm-12 am-u-md-8 am-u-md-pull-4">
                    <form class="am-form am-form-horizontal" id="profile-form">
                        <div class="am-form-group">
                            <label for="username" class="am-u-sm-3 am-form-label">姓名 / Name</label>
                            <div class="am-u-sm-9">
                                <input type="text" v-model="username" id="username" placeholder="姓名 / Name" value={{profile.username}}>
                            </div>
                        </div>

                        <div class="am-form-group">
                            <label for="email" class="am-u-sm-3 am-form-label">电子邮件 / Email</label>
                            <div class="am-u-sm-9">
                                <input type="email" v-model="email" id="email" placeholder="输入你的电子邮件 / Email" value={{profile.email}}>
                            </div>
                        </div>

                        <div class="am-form-group">
                            <label for="phone" class="am-u-sm-3 am-form-label">电话 / Telephone</label>
                            <div class="am-u-sm-9">
                                <input type="tel" v-model="phone" id="phone" placeholder="输入你的电话号码 / Telephone" value={{profile.phone}}>
                            </div>
                        </div>

                        <div class="am-form-group">
                            <label for="qq" class="am-u-sm-3 am-form-label">QQ</label>
                            <div class="am-u-sm-9">
                                <input type="number" pattern="[0-9]*" v-model="qq" id="qq" placeholder="输入你的QQ号码" value={{profile.qq}}>
                            </div>
                        </div>


                        <div class="am-form-group">
                            <label for="detail" class="am-u-sm-3 am-form-label">简介 / Intro</label>
                            <div class="am-u-sm-9">
                                <textarea class="" rows="5" v-model="detail" id="detail" placeholder="输入个人简介">{{profile.detail}}</textarea>
                            </div>
                        </div>

                        <div class="am-form-group">
                            <div class="am-u-sm-9 am-u-sm-push-3">
                                <button  type="submit" @click="on_submit" class="am-btn am-btn-primary">保存修改</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>

</template>
<style>

</style>

<script>

    var $ = require('jquery');
    require("amazeui");

    var App = require('../../assets/js/app')

    export default{

        data() {
            return {
                profile: {username: '',
                    email: '',
                    qq: '',
                    phone: '',
                    detail: ''},
                username: '',
                email: '',
                qq: '',
                phone: '',
                detail: ''
            }
        },
        
        created: function () {
            if(!App.checkLogin()){
                window.location.href = '#/login';
                return;
            }

            this.$http.get('/profile/get').then(function (res) {

                //todo : fixed me to max page size
                if (res.data.status == "fail") {
                    if (res.data.code == "0001") {
                        this.show("点赞失败");
                        alert("点赞失败");
                    }
                }else {
                    if(res.data.doc){
                        this.profile = res.data.doc;
                    }

                }
            })
        },

        methods: {
            on_submit: function (e) {
                if(!App.checkLogin()){
                    window.location.href = '#/login';
                    return;
                }

                console.log(this.username) ;
                console.log(this.email);

                var vue = this;
                var vd = $('#profile-form').validator({

                    onValid: function (validity) {
                        $(validity.field).closest('.am-input-group').find('.am-alert').hide();
                    },

                    onInValid: function (validity) {
                        var $field = $(validity.field);
                        var $group = $field.closest('.am-input-group');
                        var $alert = $group.find('.am-alert');
                        // 使用自定义的提示信息 或 插件内置的提示信息
                        var msg = $field.data('validationMessage') || this.getValidationMessage(validity);

                        if (!$alert.length) {
                            $alert = $('<div class="log-alert am-alert am-alert-danger am-radius"></div>').hide().appendTo($group);
                        }
                        $alert.html(msg).show();
                    },
                    submit: function () {
                        if (!this.isFormValid()) {
                            return;
                        }
                        vue.$http({
                            url: '/profile/save',
                            method: 'POST',
                            emulateJSON: true,
                            data: {
                                username: vue.username,
                                email: vue.email,
                                qq: vue.qq,
                                phone: vue.phone,
                                detail: vue.detail
                            }
                        }).then(function (res) {
                            debugger;
                            if (res.data.status == "fail") {
                                alert('failed to save.');
                            } else {
                                alert('success to save');
                            }
                        });
                    }
                });
            },
        }



    }

</script>
