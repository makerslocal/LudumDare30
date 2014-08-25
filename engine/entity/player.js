/*
 * entity.player.js
 */

// Prototype sets Player to be a child of Entity.
Player.prototype = new Entity();
Player.prototype.constructor = Entity;

// The Player object
function Player()
{
	this.Style.Background.Image = 'sprites.png';

	this.Style.Background.Position.X = 0;
	this.Style.Background.Position.Y = -(1024 + (Math.floor(Math.random() * 6) << 4));

	// Player.Render, create a new player?
	this.Collide = function(entity)
	{
		return true;
	}

	this.OnPickup = function(entity)
	{
		var axe = new Items_Axe();
		Inventory.Add(axe);
		Inventory.Select(axe);
	}

	this.Render = function(element)
	{
		if(this.Direction && Enums.Directions[this.Direction])
		{
			switch(Enums.Directions[this.Direction].ID)
			{
				case Enums.Directions.Down.ID:
					this.Style.Background.Position.X = 0;
					break;
				case Enums.Directions.Left.ID:
					this.Style.Background.Position.X = -128;
					break;
				case Enums.Directions.Right.ID:
					this.Style.Background.Position.X = -48;
					break;
				case Enums.Directions.Up.ID:
					this.Style.Background.Position.X = -144;
					break;
			}
		}

		if(!element)
		{
			return; // No element to render
		}

		element.setAttribute('class', 'player');
	}
}
