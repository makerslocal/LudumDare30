/*
* entity/stone.js
*/

Stone.prototype = new Entity();

function Stone()
{
	Entity.apply(this, arguments);

	this.Style.Background.Image = 'sprites.png';
	this.Style.Background.Position.X = -(208 + (Math.floor(Math.random() * 2) << 4));
	this.Style.Background.Position.Y = -1472;

	this.Collide = function(entity)
	{
		return true;
	}

	this.Render = function(element)
	{
		if(!element)
		{
			return; // No element to render
		}
	}
}