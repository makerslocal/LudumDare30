var Generators = Generators || new Object();

Generators.Rocks = {

	Generate : function(count, avoid)
	{
		if(count < 1)
		{
			return;
		}

		if(!avoid)
		{
			avoid = new Array();
		}

		var entities = new Array();

		while(count)
		{
			var x = Math.floor(Math.random() * 128);
			var y = Math.floor(Math.random() * 128);

			if(avoid[x] && avoid[x][y])
			{
				continue;
			}

			x = x << 4;
			y = y << 4;

			var rock = new Rock();

			rock.X = x;
			rock.Y = y;

			entities.push(rock);

			if(!avoid[x])
			{
				avoid[x] = new Array();
			}

			avoid[x][y] = true;

			count--;
		}

		return entities;
	}
}