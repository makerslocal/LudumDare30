/*
* entity/stone.js
*/

Stone.prototype = new Entity();
Stone.prototype.constructor = Entity;

function Stone()
{
	this.Style.Background.Image = 'sprites/spritesheet_use.png';
	this.Style.Background.Position.X = -512;
	this.Style.Background.Position.Y = -304;

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