/*
 * entities.js
 */

function Entities(world)
{
	var entities = new Array();

	this.Add = function(entity)
	{
		if(!entity)
		{
			return;
		}

		if(this.Contains(entity))
		{
			return;
		}

		entities.push(entity);

		entity.World = this.World;

		this.Grid.Add(entity);
	};

	this.Contains = function(entity)
	{
		if(!entity)
		{
			return false;
		}

		var count = entities.length;

		if(count < 1)
		{
			return false;
		}

		for(var i = 0; i < count; i++)
		{
			if(entities[i] == entity)
			{
				return true;
			}
		}

		return false;
	};

	this.Grid = new Grid();

	this.Remove = function(entity)
	{
		if(!entity)
		{
			return;
		}

		if(entities.length < 1)
		{
			return;
		}

		this.Grid.Remove(entity);

		for(var i = 0; i < entities.length; i++)
		{
			if(entities[i] == entity)
			{
				entities.splice(i--, 1);
			}
		}

		entity.World = undefined;
	};

	this.World = world;
}
