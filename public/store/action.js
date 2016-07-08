/**
 * Created by Administrator on 2016/7/8.
 */
module.exports = {
    setSearchTitle: function(store, title) {
        store.dispatch('SETTITLE', title);
    },
    setDocs: function(store, docs) {
        store.dispatch('SETDOCS', docs);
    },
    setSearchSubject: function (store, subject) {
        store.dispatch('SETSUBJECT', subject);
    }
};