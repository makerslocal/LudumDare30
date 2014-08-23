/*
 * Entity.js
 */

function Entity()
{
	// I suspect this is the pixel dim of our character
	this.Height = 16;
	this.Width = 16;
	
	// Not sure what's going on here.
	this.World = undefined;

	// Initialize character's x/y
	this.X = 0;
	this.Y = 0;

	this.IsTouching = function(entity)
	{
		if(!entity)
		{
			return false; // No entity = no touching?
		}

		if(this.X + this.Width < entity.X)
		{
			return false;
		}

		if(this.Y + this.Height < entity.Y)
		{
			return false;
		}

		if(this.X > entity.X + entity.Width)
		{
			return false;
		}

		if(this.Y > entity.Y + entity.Height)
		{
			return false;
		}
		// Conditions for non-collision didn't pass.
		return true;
	};

	this.Scan = function(x, y)
	{
		if(!this.World)
		{
			return;
		}

		if(x && y)
		{
			return true;
		}

		var height = 0;
		var width = 0;

		if(x < 0)
		{
			height = this.Height;
			width = -x;
			x = this.X + x;
			y = this.Y;
		}
		else if(x > 0)
		{
			height = this.Height;
			width = x;
			x = this.X + this.Height;
			y = this.Y;
		}
		else if(y < 0)
		{
			height = -y;
			width = this.Width;
			x = this.X;
			y = this.Y + y;
		}
		else if(y > 0)
		{
			height = y;
			width = this.Width;
			x = this.X;
			y = this.Y + this.Height;
		}

		var entities = this.World.Entities.Grid.Search(height, width, x, y);

		if(!entities)
		{
			return;
		}

		if(entities.length < 1)
		{
			return;
		}

		for(var i = 0; i < entities.length; i++)
		{
			if(entities[i] == this)
			{
				entities.splice(i--, 1);
			}
		}

		if(entities.length < 1)
		{
			return;
		}

		return entities;
	};
}
