var Generators = Generators || new Object();

Generators.Player = {

	Generate : function(avoid)
	{
		var entity = new Player();

		entity.X = 64 << 4;
		entity.Y = 64 << 4;

		return entity;
	}
}