Meteor.methods({
   'queryWalMart': function(qryString, listId){
       console.log("WalMart Query");

       //Clear any existing search result
       TypeAhead.remove({});

       //Encode the query string for sending over to WalMart's API
       var qry = encodeURI(qryString);

       //Query the WalMart search API for the specified product
       var result = HTTP.get("http://api.walmartlabs.com/v1/search?query=" + qry + "&format=json&apiKey=***");

       //Parse our search results into a JSON array
       var result = JSON.parse(result.content);

       //Convert the JSON array into a MongoDB collection
       _.each(result.items, function(taItem) {
           TypeAhead.insert({
               name: taItem.name,
               listId: listId,
               price: taItem.salePrice,
               categoryPath: taItem.categoryPath,
               thumbnail: taItem.thumbnailImage,
               isComplete: false
           });
       });

       //Return the TypeAhead MongoDB collection
       return TypeAhead.find().fetch();
   },
    'clearQuery': function(){
        TypeAhead.remove({});
    }
});