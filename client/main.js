Handlebars.registerHelper('money', function(amount){
   return accounting.formatMoney(amount);
});