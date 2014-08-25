var Generators = Generators || new Object();

Generators.Monsters = {

	Generate : function(count)
	{
		if(count < 1)
		{
			return;
		}

		var entities = new Array();

		for(var i = 0; i < count; i++)
		{
			var snake = new Snake();

			snake.X = Math.floor(Math.random() * 128) << 4;
			snake.Y = Math.floor(Math.random() * 128) << 4;

			entities.push(snake);
		}

		return entities;
	}
}