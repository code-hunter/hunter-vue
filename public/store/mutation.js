/**
 * Created by Administrator on 2016/7/8.
 */
module.exports = {
    SETTITLE: function(state, title) {
        state.search_title = title;
    },
    SETDOCS: function(state, docs) {
        state.docs = docs;
    },
    SETSUBJECT: function (state, subject) {
        state.search_subject = subject;
    },
    SETFAVDOCS: function(state, docs) {
        state.fav_docs = docs;
    },
}