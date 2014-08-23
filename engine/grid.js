/*
 * Grid.js
 */

// The Grid object
function Grid()
{
	var grid = 4; // Bits to shift x/y coord values by

	var entities = new Object(); // Not sure what this is

	// Grid.Add()
	this.Add = function(entity)
	{
		if(!entity)
		{
			return; // No entity to add
		}
		
		// Move entity.X by 4 bits? Which is like dividing it by 2, 4 times?
		var x = entity.X >> grid;
		var y = entity.Y >> grid;
		
		// Move by 4 bits
		var xx = (entity.X + entity.Width  - 1) >> grid;
		var yy = (entity.Y + entity.Height - 1) >> grid;

		// The hell?
		for(var xxx = x; xxx <= xx; xxx++)
		{
			if(!entities[xxx])
			{
				entities[xxx] = new Object();
			}

			for(var yyy = y; yyy <= yy; yyy++)
			{
				if(!entities[xxx][yyy])
				{
					entities[xxx][yyy] = new Array();
				}

				entities[xxx][yyy].push(entity);
			}
		}
	};

	this.Remove = function(entity)
	{
		if(!entity)
		{
			return;
		}

		var x = entity.X >> grid;
		var y = entity.Y >> grid;

		var xx = (entity.X + entity.Width  - 1) >> grid;
		var yy = (entity.Y + entity.Height - 1) >> grid;

		for(var xxx = x; xxx <= xx; xxx++)
		{
			if(!entities[xxx])
			{
				continue;
			}

			for(var yyy = y; yyy <= yy; yyy++)
			{
				if(!entities[xxx][yyy])
				{
					continue;
				}

				if(entities[xxx][yyy].length < 1)
				{
					delete entities[xxx][yyy];
				}

				for(var i = 0; i < entities[xxx][yyy].length; i++)
				{
					if(entities[xxx][yyy][i] == entity)
					{
						entities[xxx][yyy].splice(i--, 1);
					}
				}

				if(entities[xxx][yyy].length < 1)
				{
					delete entities[xxx][yyy];
				}
			}
		}
	};

	this.Search = function(height, width, x, y)
	{
		var xx = (x + width  - 1) >> grid;
		var yy = (y + height - 1) >> grid;

		var x = x >> grid;
		var y = y >> grid;

		var found = new Array();

		for(var xxx = x; xxx <= xx; xxx++)
		{
			if(!entities[xxx])
			{
				continue;
			}

			for(var yyy = y; yyy <= yy; yyy++)
			{
				if(!entities[xxx][yyy])
				{
					continue;
				}

				var count = entities[xxx][yyy].length;

				if(count < 1)
				{
					continue;
				}

				for(var i = 0; i < count; i++)
				{
					found.push(entities[xxx][yyy][i]);
				}
			}
		}

		if(found.length < 1)
		{
			return;
		}

		return found;
	};
}
