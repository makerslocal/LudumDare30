/*
* item.wood.js
*/

Items_Wood.prototype = new Items_Item();
Items_Wood.prototype.constructor = Item;

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
	}
}