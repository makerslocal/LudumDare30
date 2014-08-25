/*
* items/stone.js
*/

Items_Stone.prototype = new Items_Item('Stone');

function Items_Stone()
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

		if(entities)
		{
			return;
		}

		var entity = new Stone();
		entity.X = x;
		entity.Y = y;

		player.World.Entities.Add(entity);

		Inventory.Remove(this);
	}

	this.Render = function(element)
	{
		if(!element)
		{
			return; // No element to render
		}

		element.appendChild(document.createTextNode('Stone'));
	}
}