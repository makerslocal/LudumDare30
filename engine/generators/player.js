var Generators = Generators || new Object();

Generators.Player = {

	Generate : function(x, y)
	{
		var entity = new Player();

		entity.X = x || 64 << 4;
		entity.Y = y || 64 << 4;

		return entity;
	}
}