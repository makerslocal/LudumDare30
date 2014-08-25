var Generators = Generators || new Object();

Generators.Items = {

	Generate : function(count)
	{
		if(count < 1)
		{
			return;
		}

		var entities = new Array();

		for(var i = 0; i < count; i++)
		{
			var item = new Item();

			item.X = Math.floor(Math.random() * 128) << 4;
			item.Y = Math.floor(Math.random() * 128) << 4;

			entities.push(item);
		}

		return entities;
	}
}