/*
 * entity.player.js
 */

// Prototype sets Player to be a child of Entity.
Player.prototype = new Entity();

// The Player object
function Player()
{
	Entity.apply(this, arguments);

	var walking = false;

	this.Style.Background.Image = 'sprites.png';

	this.Style.Background.Position.X = 0;
	this.Style.Background.Position.Y = -(1024 + (Math.floor(Math.random() * 6) << 4));

	// Player.Render, create a new player?
	this.Collide = function(entity)
	{
		return true;
	}

	this.OnCycle = function(cycles)
	{
		if(Controls.Get(Enums.Controls.Action))
		{
			Inventory.OnAction();
		}

		var x = 0;
		var y = 0;

		for(var direction in Enums.Directions)
		{
			if(!direction)
			{
				continue;
			}

			if(!Enums.Controls[direction])
			{
				continue;
			}

			if(!Controls.Get(Enums.Controls[direction]))
			{
				continue;
			}

			x += Enums.Directions[direction].X * player.Width;
			y += Enums.Directions[direction].Y * player.Height;

			if(!Controls.Get(Enums.Controls.Strafe))
			{
				this.Direction = direction;
			}
		}

		walking = !!(x || y);

		if(this.Scan(x, y))
		{
			return;
		}

		// Remove old player object
		this.World.Entities.Grid.Remove(this);
		this.X += x; // Update player obj coords
		this.Y += y; // ditto ^
		// Create new player obj in updated location
		this.World.Entities.Grid.Add(this);

		if(!camera)
		{
			return; // No camera, can't render
		}

		camera.X += x; // Adjust center of screen to track player
		camera.Y += y; // ditto ^
	}

	this.Render = function(element)
	{
		if(this.Direction && Enums.Directions[this.Direction])
		{
			switch(Enums.Directions[this.Direction].ID)
			{
				case Enums.Directions.Down.ID:
					if(!walking)
					{
						this.Style.Background.Position.X = 0;
					}
					else
					{
						this.Style.Background.Position.X = -(((Engine.Cycles >> 1) % 3) << 4);
					}
					break;

				case Enums.Directions.Left.ID:
					if(!walking)
					{
						this.Style.Background.Position.X = -96;
					}
					else
					{
						this.Style.Background.Position.X = -((((Engine.Cycles >> 1) % 3) << 4) + 96);
					}
					break;

				case Enums.Directions.Right.ID:
					if(!walking)
					{
						this.Style.Background.Position.X = -48;
					}
					else
					{
						this.Style.Background.Position.X = -((((Engine.Cycles >> 1) % 3) << 4) + 48);
					}
					break;

				case Enums.Directions.Up.ID:
					if(!walking)
					{
						this.Style.Background.Position.X = -144;
					}
					else
					{
						this.Style.Background.Position.X = -((((Engine.Cycles >> 1) % 3) << 4) + 144);
					}
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
