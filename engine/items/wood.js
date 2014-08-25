/*
* item.wood.js
*/

Weapon.prototype = new Item();
Weapon.prototype.constructor = Item;

function Wood()
{
	this.Style.Background.Image = 'sprites/spritesheet_use.png';
	this.Style.Background.Position.X = -432;
	this.Style.Background.Position.Y = -480;

	this.Render = function(element)
	{
		if(!element)
		{
			return; // No element to render
		}

		element.setAttribute('item', 'wood');
	}
}