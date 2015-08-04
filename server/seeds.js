//Sample list data for testing
var listSeeds = [
    {
        "name" : "Walmart Shopping List",
        "total" : "8.98"
    }
];

//Sample listItem data for testing
var listItemsSeeds = [
    {
        "listId" : "",
        "name" : "Dial bar soap",
        "description" : "Antibacterial bar soap",
        "unitPrice" : "4.9",
        "category" : "Food/Snacks",
        "productUrl" : "http://c.affil.walmart.com/t/api02?l=http%3A%2F%2Fwww.walmart.com%2Fip%2FNabisco-Chips-Ahoy-Original-Chocolate-Chip-Cookies-18.2-oz%2F23658443%3Faffp1%3DnHJCqAdukYSy6N2uHIfL53Bxl_vZcp4c2-aZlVWc8fY%26affilsrc%3Dapi%26veh%3Daff%26wmlspartner%3Dreadonlyapi",
        "quantity" : "1",
        "checked" : false
    }
];


//Seed the list collection if there are no existing records
if (Lists.find().count() === 0)
{
    _.each(listSeeds, function(list){
        Lists.insert(list);
        console.log("Inserted List: " + list.name);
    });
}

//Seed the listItems collection if there are no existing records
if (ListItems.find().count() === 0)
{
    _.each(listItemsSeeds, function(listItem){
        ListItems.insert(listItem);
        console.log("Inserted List Item: " + listItem.name);
    });
}