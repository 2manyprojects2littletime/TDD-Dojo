define( [
	'dojo/declare',
	'dojo/dom-class',
	'dojo/dom-construct',
	'dijit/Calendar',
	'dojo/_WidgetBase',
	'
], function(declare, domClass, domConstruct, Calendar, _WidgetBase) {
	var calendar = null;
	var calendarID = 'dojoCalendar';

	var dateHolder = null;	
	var dateHolderID = 'dateHolder';
	
	var previousDateCss = 'previousDate';
	var currentDateCss = 'currentDate';
	var futureDateCss = 'futureDate'; 

	var applyCSSToDateHolder = function() 
	{
		if(calendar && dateHolder) 
		{
			var today = new Date();
			var selectedDate = this.get('date');

			domClass.remove(dateHolderID);
			
			if(selectedDate < today) {
				domClass.add(dateHolderID, previousDateCss);
			} else if(selectedDate > today) {
				domClass.add(dateHolderID, futureDateCss);
			} else {
				domClass.add(dateHolderID, currentDateCss);
			}	
		}
	};

	var calendarChangeEvent = function(value) {
		dateHolder.domNode.innerHTML = value;
		applyCSSToDateHolder();
	}

	return declare('ca.sean.OurWidget', [_WidgetBase], {

		_setDateAttr : function(value){
			calendar.set('value', value);
		},

		_getDateAttr : function(){
			return calendar.get('value');
		},		

		postCreate : function() {
			calendar = new Calendar({ id : calendarID }, this.domNode);
			calendar.onChange(calendarChangeEvent);

			dateHolder = domCreate.create('div', { id: dateHolderID });
			domConstruct.place(dateHolder, this.domNode);
			
			applyCSSToDateHolder();
		}

	});
});
