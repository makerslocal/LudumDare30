/*
* item.wood.js
*/

Weapon.prototype = new Item();
Weapon.prototype.constructor = Item;

function Wood()
{
	this.Render = function(element)
	{
		if(!element)
		{
			return; // No element to render
		}

		element.setAttribute('item', 'wood');
	}
}