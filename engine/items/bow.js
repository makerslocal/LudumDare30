Items_Bow.prototype = new Items_Item('Bow');

function Items_Bow()
{
	this.OnAction = function()
	{
		if(!player)
		{
			return;
		}

		if(!player.Direction)
		{
			return;
		}

		if(!Inventory.Contains('Arrow'))
		{
			return;
		}

		Inventory.Remove('Arrow');

		var x = Enums.Directions[player.Direction].X * player.Width + player.X;
		var y = Enums.Directions[player.Direction].Y * player.Height + player.Y;

		var entity = new Arrrow();

		entity.Direction = player.Direction;

		entity.X = x;
		entity.Y = y;

		player.World.Entities.Add(entity);
	}

	this.Render = function(element)
	{
		if(!element)
		{
			return; // No element to render
		}

		element.appendChild(document.createTextNode('Bow'));
	}
}