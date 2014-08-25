/*
* entity.item.js
*/

Item.prototype = new Entity();

function Item()
{
	this.Style.Background.Image = 'sprites/spritesheet_tools-set.png';
	this.Style.Background.Position.X = -16;
	this.Style.Background.Position.Y = -0;

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