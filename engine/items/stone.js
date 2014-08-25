/*
* items/stone.js
*/

Items_Stone.prototype = new Items_Item();
Items_Stone.prototype.constructor = Item;

function Items_Stone()
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