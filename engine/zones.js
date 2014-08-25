function Zones(world)
{
	var size = 7;

	var zones = new Object();

	this.World = world;

	this.Add = function(entities)
	{
		if(!entities)
		{
			return;
		}

		var x = 0;
		var y = 0;

		if(zones[0] && zones[0][0])
		{
			var points = this.List();

			while(!x && !y)
			{
				var point = Math.floor(Math.random() * points.length);

				var directions = [
					Enums.Directions.Down,
					Enums.Directions.Left,
					Enums.Directions.Right,
					Enums.Directions.Up
				];

				while(directions.length)
				{
					var direction = Math.floor(Math.random() * directions.length);

					var xx = points[point][0] + directions[direction].X;
					var yy = points[point][1] + directions[direction].Y;

					directions.splice(direction, 1);

					if(zones[xx] && zones[xx][yy])
					{
						continue;
					}

					x = xx;
					y = yy;

					break;
				}

				points.splice(point, 1);
			}
		}

		if(!zones[x])
		{
			zones[x] = new Object();
		}

		zones[x][y] = true;

		x = x << size << 4;
		y = y << size << 4;

		for(var i = 0; i < entities.length; i++)
		{
			entities[i].X += x;
			entities[i].Y += y;

			this.World.Entities.Add(entities[i]);
		}
	};

	this.List = function()
	{
		var points = new Array();

		for(var x in zones)
		{
			for(var y in zones[x])
			{
				points.push([parseInt(x), parseInt(y)]);
			}
		}

		return points;
	};

	this.Search = function(height, width, x, y)
	{
		var xx = (x + width  - 1) >> size >> 4;
		var yy = (y + height - 1) >> size >> 4;

		x = x >> size >> 4;
		y = y >> size >> 4;

		var found = new Array();

		for(var xxx = x; xxx <= xx; xxx++)
		{
			if(!zones[xxx])
			{
				continue;
			}

			for(var yyy = y; yyy <= yy; yyy++)
			{
				if(!zones[xxx][yyy])
				{
					continue;
				}

				found.push(zones[xxx][yyy]);
			}
		}

		if(found.length < 1)
		{
			return;
		}

		return found;
	};
}