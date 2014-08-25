/*
* entity.item.js
*/

Item.prototype = new Entity();
Item.prototype.constructor = Entity;

function Item()
{
	this.Style.Background.Image = 'sprites/spritesheet_use.png';
	this.Style.Background.Position.X = -432;
	this.Style.Background.Position.Y = -480;

	this.OnPickup = undefined;

	this.Render = function(element)
	{
		if(!element)
		{
			return; // No element to render
		}

		element.setAttribute('class', 'item');
	}

	var self = this;
	Engine.AddListener(function(cycles)
	{
		if(self.IsTouching(player))
		{
			if (!self.World){
				return;
			}
			if (this.OnPickup)
			{
				this.OnPickup(player);
			}
			self.World.Entities.Remove(self);
			delete self;
		}
	});
}