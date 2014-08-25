/*
* Based on code found at http://bigbadwofl.me/random-dungeon-generator/
* Thanks for the inspiration, Big Bad Wofl!
*/

var Generators = Generators || new Object();

Generators.Building = {

    Generator : function()
	{
		var build = null;
		var build_size = 32;
		var rooms = new Array();

		this.DoesCollide = function (room, ignore)
		{
			for (var i = 0; i < rooms.length; i++)
			{
				if (i == ignore)
				{
					continue;
				}

				var check = rooms[i];

				if (!((room.x + room.w < check.x) || (room.x > check.x + check.w) || (room.y + room.h < check.y) || (room.y > check.y + check.h)))
				{
					return true;
				}
			}

			return false;
		};

		this.FindClosestRoom = function(room)
		{
			var mid = {
				x: room.x + (room.w / 2),
				y: room.y + (room.h / 2),
			};

			var closest = null;
			var closest_distance = 1000;

			for (var i = 0; i < this.rooms.length; i++)
			{
				var check = this.rooms[i];

				if (check == room)
				{
					continue;
				}

				var check_mid = {
					x: check.x + (check.w / 2),
					y: check.y + (check.h / 2)
				};

				var distance = Math.min(Math.abs(mid.x - check_mid.x) - (room.w / 2) - (check.w / 2), Math.abs(mid.y - check_mid.y) - (room.h / 2) - (check.h / 2));

				if (distance < closest_distance)
				{
					closest_distance = distance;
					closest = check;
				}
			}

			return closest;
		};

		this.Generate = function()
		{
			this.build = new Array();

			for (var x = 0; x < this.build_size; x++)
			{
				this.build[x] = new Array();

				for (var y = 0; y < this.build_size; y++)
				{
					this.build[x][y] = 0;
				}
			}

			var room_count = this.Random(1, 10);
			var min_size = 5;
			var max_size = 10;

			for (var i = 0; i < room_count; i++)
			{
				var room = new Object();

				room.x = this.Random(1, this.build_size - max_size - 1);
				room.y = this.Random(1, this.build_size - max_size - 1);

				room.w = this.Random(min_size, max_size);
				room.h = this.Random(min_size, max_size);

				if (this.DoesCollide(room))
				{
					i--;

					continue;
				}

				room.w--;
				room.h--;

				rooms.push(room);
			}

			this.SquashRooms();

			for (i = 0; i < room_count; i++)
			{
				var roomA = this.rooms[i];

				if (room_count > 1)
				{
					var roomB = this.FindClosestRoom(roomA);

					pointA = {
						x: this.Random(roomA.x, roomA.x + roomA.w),
						y: this.Random(roomA.y, roomA.y + roomA.h)
					};

					pointB = {
						x: this.Random(roomB.x, roomB.x + roomB.w),
						y: this.Random(roomB.y, roomB.y + roomB.h)
					};

					while ((pointB.x != pointA.x) || (pointB.y != pointA.y))
					{
						if (pointB.x != pointA.x)
						{
							if (pointB.x > pointA.x)
							{
								pointB.x--;
							}
							else
							{
								pointB.x++;
							}
						}
						else if (pointB.y != pointA.y)
						{
							if (pointB.y > pointA.y)
							{
								pointB.y--;
							}
							else
							{
								pointB.y++;
							}
						}

						this.build[pointB.x][pointB.y] = 1;
					}
				}
			}

			for (i = 0; i < room_count; i++)
			{	  
				var room = this.rooms[i];

				do
				{
					var randomX = Math.floor(room.w * Math.random() + 1) + room.x;
					var randomY = Math.floor(room.h * Math.random() + 1) + room.y;
				}
				while (randomX != room.x && randomX != (room.x + room.w) && randomY != room.y && randomY != (room.y + room.h));

				this.build[randomX][randomY] = 3;

				for (var x = room.x; x < room.x + room.w; x++)
				{
					for (var y = room.y; y < room.y + room.h; y++)
					{
						this.build[x][y] = 1;
					}
				}
			}

			for (var x = 0; x < this.build_size; x++)
			{
				for (var y = 0; y < this.build_size; y++)
				{
					if (this.build[x][y] == 1)
					{
						for (var xx = x - 1; xx <= x + 1; xx++)
						{
							for (var yy = y - 1; yy <= y + 1; yy++)
							{
								if (this.build[xx][yy] == 0) this.build[xx][yy] = 2;
							}
						}
					}
				}
			}
		};

        this.Random = function(low, high)
        {
            return~~ (Math.random() * (high - low)) + low;
        };

		this.SquashRooms = function()
		{
			for (var i = 0; i < 10; i++)
			{
				for (var j = 0; j < this.rooms.length; j++)
				{
					var room = this.rooms[j];

					while (true)
					{
						var old_position = {
							x: room.x,
							y: room.y,
						};

						if (room.x > 1)
						{
							room.x--;
						}

						if (room.y > 1)
						{
							room.y--;
						}

						if ((room.x == 1) && (room.y == 1))
						{
							break;
						}

						if (this.DoesCollide(room, j))
						{
							room.x = old_position.x;
							room.y = old_position.y;

							break;
						}
					}
				}
			}
		};

        this.Render = function(offsetX, offsetY, world)
        {
            var entities = new Array();

            for (var x = 0; x < Building.build_size; x++)
            {
                entities[x] = new Array();

                for (var y = 0; y < Building.build_size; y++)
                {
                    var entity;

                    switch(Building.build[x][y])
                    {
                        case 0:
                            break;
                        case 1:
                            break;
                        case 2:
                            break;
                        case 3:
                            entity = new Wood();
                            break;
                    }

                    if(!entity)
                    {
                        continue;
                    }
				}
			}
		}
	},

    Generate : function(count, avoid)
    {
        if(count < 1)
        {
            return;
        }

        if(!avoid)
        {
            avoid = new Array();
        }

        var entities = new Array();

        while(count)
        {
            var x = Math.floor(Math.random() * 128);
            var y = Math.floor(Math.random() * 128);

            if(avoid[x] && avoid[x][y])
            {
                continue;
            }

            x = x << 4;
            y = y << 4;

            var generator = new this.Generator();

            generator.Generate();

            var tiles = generator.Render();

            for(var xx in tiles)
            {
                for(var yy in tiles[xx])
                {
                    var tile = tiles[xx][yy];

                    tile.X = xx << 4;
                    tile.Y = yy << 4;

                    entities.push(tile);
                }
            }

            count--;
        }

        return entities;
    }
};