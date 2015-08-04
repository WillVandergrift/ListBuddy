Router.configure({
    layoutTemplate : 'layout',
    loadingTemplate : 'loading,',
    notFoundTemplate : 'notFound'

});

Router.route("/", {
    name : "homeIndex"
});

Router.route("/lists", {
    name : "listsIndex"
});

Router.route("/new-list", {
    name : "listCreate"
});

Router.route('/list/:_id', {
    name: 'listIndex',
    data: function(){
        var currentList = this.params._id;
        return Lists.findOne({ _id: currentList });
    }
});