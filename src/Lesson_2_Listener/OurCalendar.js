require([
	'dijit/Calendar',
	'dojo/dom',
	'dojo/domReady!'
], function(Calendar, dom) {
	var ourWidget = new Calendar({}, 'theWidget');

	ourWidget.on('change', function(value) {
		console.log(value);

		var domNode = dom.byId('textHolder');
		domNode.innerHTML = value;
	});

	ourWidget.on('mouseOver', function(event){
		console.log(event);

		var theMessage = 'Coordinate X: ' + event.clientX + ', Y: ' + event.clientY;

		var domNode = dom.byId('coordinates');
		domNode.innerHTML = theMessage;
	});
});
