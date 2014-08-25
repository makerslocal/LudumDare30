/*
* entity/stone.js
*/

Stone.prototype = new Entity();
Stone.prototype.constructor = Entity;

function Stone()
{
	this.Style.Background.Image = 'sprites/spritesheet_tools-set.png';
	this.Style.Background.Position.X = -32;
	this.Style.Background.Position.Y = -16;

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