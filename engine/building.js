var Building = {
    build: null,
    build_size: 32,
    rooms: [],
    Generate: function () {
        this.build = [];
        for (var x = 0; x < this.build_size; x++) {
            this.build[x] = [];
            for (var y = 0; y < this.build_size; y++) {
                this.build[x][y] = 0;
            }
        }

        var room_count = Helpers.GetRandom(1, 10);
        var min_size = 5;
        var max_size = 10;

        for (var i = 0; i < room_count; i++) {
            var room = {};

            room.x = Helpers.GetRandom(1, this.build_size - max_size - 1);
            room.y = Helpers.GetRandom(1, this.build_size - max_size - 1);
            room.w = Helpers.GetRandom(min_size, max_size);
            room.h = Helpers.GetRandom(min_size, max_size);

            if (this.DoesCollide(room)) {
                i--;
                continue;
            }
            room.w--;
            room.h--;

            this.rooms.push(room);
        }

        this.SquashRooms();

        for (i = 0; i < room_count; i++) {            
            var roomA = this.rooms[i];
            if (room_count > 1) {
                var roomB = this.FindClosestRoom(roomA);
                pointA = {
                    x: Helpers.GetRandom(roomA.x, roomA.x + roomA.w),
                    y: Helpers.GetRandom(roomA.y, roomA.y + roomA.h)
                };
                pointB = {
                    x: Helpers.GetRandom(roomB.x, roomB.x + roomB.w),
                    y: Helpers.GetRandom(roomB.y, roomB.y + roomB.h)
                };
                while ((pointB.x != pointA.x) || (pointB.y != pointA.y)) {
                    if (pointB.x != pointA.x) {
                        if (pointB.x > pointA.x) pointB.x--;
                        else pointB.x++;
                    } else if (pointB.y != pointA.y) {
                        if (pointB.y > pointA.y) pointB.y--;
                        else pointB.y++;
                    }

                    this.build[pointB.x][pointB.y] = 1;
                }
            }
        }

        for (i = 0; i < room_count; i++) {      
            var room = this.rooms[i];
             do {
                var randomX = Math.floor(room.w * Math.random() + 1) + room.x;
                var randomY = Math.floor(room.h * Math.random() + 1) + room.y;
            } while (randomX != room.x && randomX != (room.x + room.w) && randomY != room.y && randomY != (room.y + room.h));
            this.build[randomX][randomY] = 3;
            for (var x = room.x; x < room.x + room.w; x++) {
                for (var y = room.y; y < room.y + room.h; y++) {
                    this.build[x][y] = 1;
                }
            }
        }

        for (var x = 0; x < this.build_size; x++) {
            for (var y = 0; y < this.build_size; y++) {
                if (this.build[x][y] == 1) {
                    for (var xx = x - 1; xx <= x + 1; xx++) {
                        for (var yy = y - 1; yy <= y + 1; yy++) {
                            if (this.build[xx][yy] == 0) this.build[xx][yy] = 2;
                        }
                    }
                }
            }
        }
    },
        
    FindClosestRoom: function (room) {
        var mid = {
            x: room.x + (room.w / 2),
            y: room.y + (room.h / 2)
        };
        var closest = null;
        var closest_distance = 1000;
        for (var i = 0; i < this.rooms.length; i++) {
            var check = this.rooms[i];
            if (check == room) continue;
            var check_mid = {
                x: check.x + (check.w / 2),
                y: check.y + (check.h / 2)
            };
            var distance = Math.min(Math.abs(mid.x - check_mid.x) - (room.w / 2) - (check.w / 2), Math.abs(mid.y - check_mid.y) - (room.h / 2) - (check.h / 2));
            if (distance < closest_distance) {
                closest_distance = distance;
                closest = check;
            }
        }
        return closest;
    },
    SquashRooms: function () {
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < this.rooms.length; j++) {
                var room = this.rooms[j];
                while (true) {
                    var old_position = {
                        x: room.x,
                        y: room.y
                    };
                    if (room.x > 1) room.x--;
                    if (room.y > 1) room.y--;
                    if ((room.x == 1) && (room.y == 1)) break;
                    if (this.DoesCollide(room, j)) {
                        room.x = old_position.x;
                        room.y = old_position.y;
                        break;
                    }
                }
            }
        }
    },
    DoesCollide: function (room, ignore) {
        for (var i = 0; i < this.rooms.length; i++) {
            if (i == ignore) continue;
            var check = this.rooms[i];
            if (!((room.x + room.w < check.x) || (room.x > check.x + check.w) || (room.y + room.h < check.y) || (room.y > check.y + check.h))) return true;
        }

        return false;
    }
}

var Renderer = {
    //canvas: null,
    //ctx: null,
    //size: 512,
    //scale: 0,
    //Initialize: function () {
    //    this.canvas = document.getElementById('canvas');
    //    this.canvas.width = this.size;
    //    this.canvas.height = this.size;
    //    this.ctx = canvas.getContext('2d');
    //    this.scale = this.canvas.width / Building.build_size;
    //},
    Update: function (offsetX, offsetY, world) {
        for (var y = 0; y < Building.build_size; y++) {
            for (var x = 0; x < Building.build_size; x++) {
                var tile = Building.build[x][y];
                if (tile == 0); //this.ctx.fillStyle = '#64908A';
                else if (tile == 1); //this.ctx.fillStyle = '#351330';
                else if (tile == 3); //this.ctx.fillStyle = '#666666';
                else //this.ctx.fillStyle = '#424254';
                {
                    var wood = new Wood();
                    wood.X = (x << 4) + offsetX;
                    wood.Y = (y << 4) + offsetY;
                    world.Entities.Add(wood);
                }
                //this.ctx.fillRect(x * this.scale, y * this.scale, this.scale, this.scale);
            }
        }
    }
};

var Helpers = {
    GetRandom: function (low, high) {
        return~~ (Math.random() * (high - low)) + low;
    }
};

//Building.Generate();
//Renderer.Initialize();
//Renderer.Update(Building.build);