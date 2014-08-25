var Generators = Generators || new Object();

Generators.Player = {

	Generate : function(x, y)
	{
		var entity = new Player();

		entity.X = x || 0;
		entity.Y = y || 0;

		return entity;
	}
}