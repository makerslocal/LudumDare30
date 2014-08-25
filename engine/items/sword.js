Items_Sword.prototype = new Items_Item('Sword');

function Items_Sword()
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

		var x = Enums.Directions[player.Direction].X * player.Width + player.X;
		var y = Enums.Directions[player.Direction].Y * player.Height + player.Y;

		var entities = player.World.Entities.Grid.Search(player.Height, player.Width, x, y);

		if(!entities)
		{
			return;
		}

		for (var i in entities)
		{
			var entity = entities[i];

			if (!(entity instanceof Monster))
			{
				continue;
			}

			entity.World.Entities.Remove(entity);

			delete entity;
		}
	}

	this.Render = function(element)
	{
		if(!element)
		{
			return; // No element to render
		}

		element.appendChild(document.createTextNode('Sword'));
	}
}