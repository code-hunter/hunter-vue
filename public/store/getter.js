/**
 * Created by Administrator on 2016/7/8.
 */
module.exports = {
    docs: function(state) {
        return state.docs;
    },
    fav_docs: function(state) {
        return state.fav_docs;
    },
    search_title: function(state) {
        return state.search_title;
    },
    search_subject: function(state) {
        return state.search_subject;
    },
};