/*
* item.axe.js
*/

Axe.prototype = new Item();
Axe.prototype.constructor = Item;

function Axe()
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
		console.log(player.Direction);
		var X = Enums.Directions[player.Direction].X * player.Width + player.X;
		var Y = Enums.Directions[player.Direction].Y * player.Height + player.Y;

		var entities = player.World.Entities.Grid.Search(player.Height, player.Width, X, Y);

		for (var i in entities)
		{
			var entity = entities[i];

			if (!(entity instanceof Tree))
			{
				continue;
			}

			entity.World.Entities.Remove(entity);
			delete entity;

			Inventory.Add(new Wood());
		}
	}

	this.Render = function(element)
	{
		if(!element)
		{
			return; // No element to render
		}
	}
}