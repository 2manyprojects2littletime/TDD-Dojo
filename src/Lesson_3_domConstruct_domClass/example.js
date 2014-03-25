require([
	'dojo/dom-construct', 
	'dojo/dom-class',
	'dojo/domReady!' 
], function(domConstruct, domClass) {

	// Two different ways to create html from text.
	var appleDiv = domConstruct.create('div', { id : 'appleDiv', innerHTML: 'Vitamen C'});
	var orangeDiv = domConstruct.toDom('<h3>Citrus Yum!!</h3><hr />');

	//Place apple after orange (default value "last")
	domConstruct.place(appleDiv, orangeDiv);

	//create a new div and set the innerHTML manually
	var bananaDiv = domConstruct.create('div');
	bananaDiv.innerHTML = 'Here is a Banana';

	//Add some CSS classes to the divs
	domClass.add(bananaDiv, 'blink');
	domClass.add(bananaDiv, ['hotPink', 'fancyBorder']);
	domClass.add(appleDiv, 'hotPink');

	//Put the banana div at the beginning of the orangeDiv structure.
	//this 3rd parameter lets us control how to add one div to another.
	//before, after, replace, first, last.
	domConstruct.place(bananaDiv, orangeDiv, 'first');

	//example showing a few more ways to manipulate css classes
	if( domClass.contains(bananaDiv, 'blink') ) {
		domClass.remove(bananaDiv, 'hotPink');
	}

	//Put the Orange Div into our original HTML document
	//where there is an id='exampleHere'
	domConstruct.place(orangeDiv, 'exampleHere');
});
