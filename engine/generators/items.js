var Generators = Generators || new Object();

Generators.Items = {

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

			var item;

			switch(Math.floor(Math.random() * 5))
			{
				case 0:
					item = new Arrow();
					break;

				case 1:
					item = new Axe();
					break;

				case 2:
					item = new Bow();
					break;

				case 3:
					item = new Pickaxe();
					break;

				case 4:
					item = new Sword();
					break;
			}

			item.X = x;
			item.Y = y;

			entities.push(item);

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