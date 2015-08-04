Template.sidePanel.helpers({
    'lists': function(){
        //Return a list of lists
        return Lists.find();
    },
    'listItemCount' : function(listId){
        //Returns the count of list items
        return Lists.ItemCount(listId);
    }
});