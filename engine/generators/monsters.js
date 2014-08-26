var Generators = Generators || new Object();

Generators.Monsters = {

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

			var entity = undefined;

			switch(count % 6)
			{
				case 3:
				case 4:
					entity = new Jelly();
					break;

				case 0:
				case 1:
				case 2:
					entity = new Snake();
					break;

				case 5:
					entity = new Wizard();
					break;

				//case 6:
				//	entity = new Dolphin();
				//	break;
			}

			entity.X = x;
			entity.Y = y;

			entities.push(entity);

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