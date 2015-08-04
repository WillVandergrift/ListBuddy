var timeout;

Template.listIndex.rendered = function() {
    Meteor.typeahead.inject();
};

Template.listIndex.helpers({
    'listItems': function(listId){
        //Return a list of lists
        return ListItems.find({
            listId: listId
        }).fetch().reverse();
    },
    'typeAhead': function(query, sync, callback){

        var curListId = Router.current().params._id;

        if (timeout) { clearTimeout(timeout); }

        timeout = setTimeout(function() {
            console.log('TypeAhead');
            Meteor.call('queryWalMart', query, curListId, function(err, result){
                if (err)
                {
                    console.log('Error Calling QueryWalmart. Err: ' + err);
                }
                callback(result);
            });
        }, 1000);
    },
    'selected': function(event, suggestion, datasetName) {
        // event - the jQuery event object
        // suggestion - the suggestion object
        // datasetName - the name of the dataset the suggestion belongs to
        // TODO your event handler here
        ListItems.insert(suggestion);
        Meteor.call('clearQuery');
        $('.typeahead').typeahead('val', '');
    },
    'listPrice': function() {
        //Get the current list ID
        var curListId = Router.current().params._id;

        return Lists.TotalPrice(curListId);
    }
});

Template.listIndex.events({
    "submit .new-list-item": function(event) {
        //Prevent the default form operation
        event.preventDefault();

        //Get the value of the text field
        var itemName = event.target.txtItemAdd.value;

        //Get the current list ID
        var curListId = Router.current().params._id;

        ListItems.insert({
            listId: curListId,
            name: itemName,
            price: 0,
            category: "Miscellaneous"
        });
    },

    "click .list-item-btn-delete": function() {
        ListItems.remove(this._id);
    }
});