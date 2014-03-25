require( [
	'doh',
	'dojo/dom-class',
	'dojo/_WidgetBase',
	'ca/sean/SampleWidget'
], function(doh, domClass, _WidgetBase, SampleWidget) {
	
	doh.register('Basic Unit Tests', [ {
		name: 'use instanceof to check inheritance structures',
		runTest: function() {
			var sut = new SampleWidget();
			doh.assertTrue(sut instanceof SampleWidget);
			doh.assertTrue(sut instanceof _WidgetBase);
		}
	}, {
		name: 'using typeof to check to make sure functions exist',
		runTest: function(){
			var sut = new SampleWidget();
			doh.assertEqual('function', typeof sut._setMyNameAttr);
		}
	}]);

	doh.register('Some DOM checks', [ {
		name: 'use dom-class to help check for css classes',
		runTest: function() {
			var sut = new SampleWidget();
			sut.assertTrue( domClass.contains(sut.domNode, 'myCSSClass');
		}
	}, {
		name: 'use the id in the dom node to confirm a given attribute is set in the html',
		runtest: function() {
			var sut = new SampleWidget();
			sut.assertTrue('myID', sut.domNode.id);
		}
	}, {
		name: 'Check the Inner HTML to ensure the data is set appropriatly',
		runTest: function() {
			var sut = new SampleWidget( { myName : 'Test Case' } );
			var expected = 'Hello Test Case';
			sut.assertTrue(expected, sut.domNode.innerHTML);
		}
	}]);
});
