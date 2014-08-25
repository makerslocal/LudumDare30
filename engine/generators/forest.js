var Generators = Generators || new Object();

Generators.Forest = {

	Generate : function(count)
	{
		if(count < 1)
		{
			return;
		}

		var entities = new Array();

		for(var i = 0; i < count; i++)
		{
			var tree = new Tree();

			tree.X = (Math.floor(Math.random() * 128) - 64) << 4;
			tree.Y = (Math.floor(Math.random() * 128) - 64) << 4;

			entities.push(tree);
		}

		return entities;
	}
}