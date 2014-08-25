function Zones(world)
{
	var size = 7;

	var zones = new Object();

	this.Add = function(x, y)
	{
		if(!zones[x])
		{
			zones[x] = new Object();
		}

		zones[x][y] = true;
	}

	this.Search = function(height, width, x, y)
	{
		x += 1 << 4 << (size - 1);
		y += 1 << 4 << (size - 1);

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

	this.World = world;
}