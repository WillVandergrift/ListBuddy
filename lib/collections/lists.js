Lists = new Mongo.Collection("lists");

//Gets a list of items for the specified list id
Lists.ItemCount = function(listId){
    return ListItems.find({
        listId: listId
    }).count();
};

Lists.TotalPrice = function(listId){
    var totalPrice = 0;
    ListItems.find({ listId: listId }).forEach(function(curItem){
        totalPrice += curItem.price;
    });

    return totalPrice;
};