function Entity()
{
	this.Height = 16;
	this.Width = 16;

	this.World = undefined;

	this.X = 0;
	this.Y = 0;

	this.IsTouching = function(entity)
	{
		if(!entity)
		{
			return false;
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
			return;
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