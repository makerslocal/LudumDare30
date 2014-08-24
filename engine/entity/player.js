/*
 * entity.player.js
 */

// Prototype sets Player to be a child of Entity.
Player.prototype = new Entity();
Player.prototype.constructor = Entity;

// The Player object
function Player()
{
	this.Style.Background.Image = 'sprites/spritesheet_use.png';
	this.Style.Background.Position.X = -288;
	this.Style.Background.Position.Y = -304;

	this.Direction = undefined;

	// Player.Render, create a new player?
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

		element.setAttribute('class', 'player');
	}
}
