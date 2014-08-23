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

	this.Export = function(height, width, x, y) {

		var ENUM_TREE = 0x01;

		x2 = x+width;
		y2 = y+height;

		var tilewidth = width >> 4;
		var tileheight = height >> 4;
	
		//init the byte array (each byte is a tile)
		var bytearray = new Array();
		for ( i=0; i<tilewidth; i++ ) {
			bytearray[i] = new Array();
			for ( j=0; j<tileheight; j++ ) {
				bytearray[i][j] = 0x00; //nothin' here
			}
		}
	
		//alert("Exporting entities from " + x + "," + y + " to " + x2 + "," + y2);

		var included = this.Grid.Search(height,width,x,y);
		
		for ( var i=0; i<included.length; i++) {

			var thebyte = 0x00;			

			var locx = ( included[i].X >> 4 ) + (tilewidth/2);
			var locy = ( included[i].Y >> 4 ) + (tileheight/2);
			
			if ( included[i] instanceof Tree ) {
				//alert("Trees here: " + (locx) + "," + (locy) );
				thebyte = thebyte | ENUM_TREE;
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
