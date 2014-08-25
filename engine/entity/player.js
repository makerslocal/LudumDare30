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

	// Player.Render, create a new player?
	this.Collide = function(entity)
	{
		return true;
	}

	this.OnPickup = function(entity)
	{
		
	}

	this.Render = function(element)
	{
		switch(this.Direction)
		{
			case Enums.Directions.Down.ID:
				this.Style.Background.Position.X = -288;
				break;
			case Enums.Directions.Left.ID:
				this.Style.Background.Position.X = -336;
				break;
			case Enums.Directions.Right.ID:
				this.Style.Background.Position.X = -336;
				break;
			case Enums.Directions.Up.ID:
				this.Style.Background.Position.X = -384;
				break;
		}

		if(!element)
		{
			return; // No element to render
		}

		element.setAttribute('class', 'player');
	}
}
