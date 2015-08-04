Template.listCreate.events({
    "submit .new-list": function (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get the list name from the form
        var text = event.target.txtListName.value;

        // Insert a new list into the collection
        var newId = Lists.insert({
                    name: text,
                    userId: this.userId,
                    total: 0.0
                });

        //Clear the form
        event.target.txtListName.value = "";

        // Redirect to the new list
        Router.go('listIndex', {_id: newId});
    }
});