/*
* item.axe.js
*/

Weapon.prototype = new Item();
Weapon.prototype.constructor = Item;

function Axe()
{
	this.OnAction = function()

	this.Render = function(element)
	{
		if(!element)
		{
			return; // No element to render
		}

		element.setAttribute('item', 'axe');
	}
}