define([
	'dojo/declare',
	'dojo/dom-construct',
	'_WidgetBase'
], function( declare, domConstruct, _WidgetBase ) {
	//outside here are private closure methods/variables.
	//Careful what you store here, with AMD module are only loaded once
	
	var myName;

	return declare('ca.sean.SampleWidget', [_WidgetBase], {
		//Inside here are public access methods/variables

		_setMyNameAttr : function(value) {
			myName = value;
		},		

		//Called after everything is created but before added to the dom
		postCreate : function() {
			var someContent = domConstruct.create('div');
			someContent.innerHTML = 'Hello ' + myName;

			domConstruct.place(someContent, this.domNode);
		}

	});
});
