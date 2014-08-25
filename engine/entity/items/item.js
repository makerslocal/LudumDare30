/*
* entity.item.js
*/

Item.prototype = new Entity();

function Item()
{
	this.OnCycle = function(cycles)
	{
		if(this.IsTouching(player))
		{
			if (!this.World)
			{
				return;
			}

			if (this.OnPickup)
			{
				this.OnPickup(player);
			}

			this.World.Entities.Remove(this);
		}
	};

	this.OnPickup = undefined;

	this.Render = function(element)
	{
		if(!element)
		{
			return; // No element to render
		}

		element.setAttribute('class', 'item');
	};
}