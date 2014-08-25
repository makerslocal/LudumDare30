Monster.prototype = new Entity();

function Monster()
{
	Entity.apply(this, arguments);

	this.Direction = undefined;

	this.Collide = function(entity)
	{
		return true;
	}

	this.Wander = function()
	{
		var directions = [
			Enums.Directions.Down,
			Enums.Directions.Left,
			Enums.Directions.Right,
			Enums.Directions.Up
		];

		while(directions.length)
		{
			var direction = Math.floor(Math.random() * directions.length);

			var x = directions[direction].X * this.Width;
			var y = directions[direction].Y * this.Height;

			if(this.Scan(x, y))
			{
				directions.splice(direction, 1);
				continue;
			}

			this.Direction = directions[direction].ID;

			if(!this.World)
			{
				continue;
			}

			this.World.Entities.Grid.Remove(this);
			this.X += x;
			this.Y += y;
			this.World.Entities.Grid.Add(this);

			break;
		}
	}
}