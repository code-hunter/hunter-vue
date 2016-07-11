/**
 * Created by Administrator on 2016/7/11.
 */

module.exports = {

    checkLogin: function () {
        var cookies = window.document.cookie
        if(cookies && cookies.indexOf("login=true") != -1) {
            return true;
        }

        return false;
    }
}