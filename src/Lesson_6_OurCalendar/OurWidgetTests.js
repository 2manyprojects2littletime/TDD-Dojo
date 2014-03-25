require([
	'doh',
	'dojo/dom',
	'dojo/date',
	'dojo/dom-class',
	'dojo/_WidgetBase',
	'ca/sean/OurWidget'
], function(doh, dom, date, domClass, _WidgetBase, OurWidget) {

	doh.register('Constructor Test', [{
		name : 'Class Exists',
		runTest: function() {
			var sut = new OurWidget();
			doh.assertTrue( sut instanceof OurWidget );
		}
	}, {
		name : 'Widget extends _WidgetBase',
		runTest: function() {
			var sut = new OurWidget();
			doh.assertTrue( sut instanceof _WidgetBase );
		}
	} ]);

	doh.register('Calendar Test', [{
		name: 'Widget has a calendar',
		runTest: function() {
			var sut = new OurWidget();
			
			var actual = dom.byId('dojoCalendar');

			doh.assertTrue( actual, 'Dijit Calendar not found in dom');
		}
	}]);

	doh.register('Date Attribute', [ {
		name : 'Has a method to get the selected date',
		runTest: function() {
			var sut = new OurWidget();
			doh.assertEqual('function', sut._getDateAttr);
		}
	}, {
		name : 'Has a method to set the selected date',
		runTest: function() {
			var sut = new OurWidget();
			doh.assertEqual('function', sut._setDateAttr);
		}
	}, {
		name: 'Getting the date returns todays date',
		runTest: function() {
			var sut = new OurWidget();
			
			var expected = new Date();
			var actual = sut.get('date');

			doh.assertEqual(expected, actual);
		}
	}, {
		name : 'Setting the date will set the given date',
		runTest: function() {
			var sut = new OurWidget();
			
			var expected = new Date('2014-03-25');
			sut.set('date', expected);
			
			var actual = sut.get('date');

			doh.assertEqual(expected, actual);
		}
	}]);


	doh.register('Date Holder Display', [{
		name: 'Has a Div with an id of DateHolder',
		runTest: function(){
			var sut = new OurWidget();

			doh.assertTrue( dom.byId('dateHolder') );
		}
	}, {
		name : 'When Date is before, red css class is present',
		runTest : function() {
			var sut = new OurWidget();
			
			var prevDate = new Date();
  			date.add(prevDate, "day", -1);
			sut.set('date', prevDate);

			var domNode = dom.byId('dateHolder');
			doh.assertTrue( domClass.contains(domNode, 'previousDate'));
		}
	}, {
		name : 'When Date is After, green css class is present',
		runTest : function() {
			var sut = new OurWidget();
			
			var futureDate = new Date();
  			date.add(futureDate, "day", 1);
			sut.set('date', futureDate);

			var domNode = dom.byId('dateHolder');
			doh.assertTrue( domClass.contains(domNode, 'futureDate'));
		}
	}, {
		name : 'When Date is today, black css class is present',
		runTest : function() {
			var sut = new OurWidget();
			sut.set('date', new Date());

			var domNode = dom.byId('dateHolder');
			doh.assertTrue( domClass.contains(domNode, 'currentDate'));
		}
	}]);

});
