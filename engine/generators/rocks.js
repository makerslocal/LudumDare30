var Generators = Generators || new Object();

Generators.Rocks = {

	Generate : function(count)
	{
		if(count < 1)
		{
			return;
		}

		var entities = new Array();

		for(var i = 0; i < count; i++)
		{
			var rock = new Rock();

			rock.X = (Math.floor(Math.random() * 128) - 64) << 4;
			rock.Y = (Math.floor(Math.random() * 128) - 64) << 4;

			entities.push(rock);
		}

		return entities;
	}
}