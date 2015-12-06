Food = new Meteor.Collection('food');

if (Meteor.isClient) {

	Session.setDefault('counter', 0);
	Session.setDefault('exchangedPrinciple', 0);
	Session.setDefault('finalCurrency', 0);

	Session.setDefault('val1',0);
	Session.setDefault('val2',0);
	Session.setDefault('score,0');










	Template.converter.events({
		'submit .converter':function(event){
			event.preventDefault();
			//Exchange Rates
			var cadToUsdRate = 0.75;
			var usdToCadRate = 1.33;
			var exchangerates = [cadToUsdRate], usdToCadRate
			//Gets value from form
			var principleValue = event.target.principle.value;
			var rateSelected = event.target.rateSelected.value;
			Session.set('exchanged',Meteor.myFunctions[rateSelected]);

		}
	});



Template.converter.helpers({
	exchange:function(principle, rateSelected){
		return principle*exchangerates[rateSelected];
	},
	returnExchanged:function(){
		var temp  = Session.get('exchangedPrinciple');
		if(temp<0){
			return "That's a negative value.";
		}else{
			return temp;
		}
	}
});  

Template.loginButtons.rendered = function()
{
	Accounts._loginButtonsSession.set('dropdownVisible', true);

};










          
 

Template.gallery.helpers({

	food: function(){
      return Food.find();


	}
});


}



	















































































































































































































































































































