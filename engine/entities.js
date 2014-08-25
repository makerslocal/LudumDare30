/*
 * entities.js
 */

function Entities(world)
{
	var entities = new Array();
	var binascii = new BinAscii();

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

		this.World.IsDirty = true;
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

		this.World.IsDirty = true;
	};

	this.Import = function(data) {
		
		var a = binascii.AsciiToBin(data);
		var size = Math.sqrt(a.length);

		//Init the object array
		var ents = new Array();
		for ( i=0; i<size; i++ ) {
			for ( j=0; j< size; j++ ) {
				//alert( a[(size*i)+j] );
				byte = a[(size*i)+j];
				if ( byte & Enums.Entities.Tree.ID > 0 ) {
					//alert("Tree");
					ent = new Tree();
					ent.X = i << 4;
					ent.Y = j << 4;
					ents.push(ent);
				} else if ( byte === 0x0 ) {
					//don't do anything
				} else {
					console.log("What is a " + byte + "?");
				}
			}
		}

		return ents;	
		
	};

	this.Export = function(height, width, x, y) {

		x2 = x+width;
		y2 = y+height;

		var tilewidth = width >> 4;
		var tileheight = height >> 4;

		var tilex = x >> 4;
		var tiley = y >> 4;

		//init the byte array (each byte is a tile)
		var bytearray = new Array();
		for ( i=0; i<tilewidth; i++ ) {
			bytearray[i] = new Array();
			for ( j=0; j<tileheight; j++ ) {
				bytearray[i][j] = 0x0; //nothin' here
			}
		}
	
		//alert("Exporting entities from " + x + "," + y + " to " + x2 + "," + y2);

		var included = this.Grid.Search(height,width,x,y);
		
		for ( var i=0; i<included.length; i++) {

			var thebyte = 0x0;			

			var locx = ( included[i].X >> 4 ) + (tilex/2);
			var locy = ( included[i].Y >> 4 ) + (tiley/2);
			
			if ( included[i] instanceof Tree ) {
				//alert("Trees here: " + (locx) + "," + (locy) );
				thebyte = thebyte | Enums.Entities.Tree.ID;
			}

			//alert(binascii.BinToAscii( [thebyte] ));
			//alert(thebyte);

			//The byte might be zero at this point, which is fine.
			//We can still save it into the array. If we didn't explicitly
			//set it nonzero above, it might be the player, or something
			//else we don't necessarily want to save.
			
			bytearray[locy][locx] = thebyte;
			
		}

		//we have a bytearray, now let's create a big-ass string
		var bigassstring = "";
		for ( i=0; i<bytearray.length; i++ ) {
			/*
			for ( j=0; j<bytearray[0].length; j++ ) {
				bigassstring += binascii.BinToAscii(bytearray[i][j]);
			}
			*/
			bigassstring += binascii.BinToAscii(bytearray[i]);
		}

		return(bigassstring);		


	};

	this.World = world;
}
