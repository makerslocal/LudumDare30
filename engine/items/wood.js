/*
* items/wood.js
*/

Items_Wood.prototype = new Items_Item('Wood');

function Items_Wood()
{
	this.OnAction = function()
	{
		
	}

	this.Render = function(element)
	{
		if(!element)
		{
			return; // No element to render
		}

		element.appendChild(document.createTextNode('Wood'));
	}
}