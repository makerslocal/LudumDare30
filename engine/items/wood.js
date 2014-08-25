/*
* item.wood.js
*/

Wood.prototype = new Item();
Wood.prototype.constructor = Item;

function Wood()
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
	}
}