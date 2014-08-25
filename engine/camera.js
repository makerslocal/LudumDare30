/*
 * Camera.js
 * Renders world
 */

function Camera(element)
{
	// Check to make sure the 'element' passed into 'Camera' exists.
	if(!element)
	{
		return; // Function was misscalled, exit early
	}

	this.Bitmaps = new Object();

	// Create a child of Camera, set it to our passed in element
	this.Element = element;

	this.Scale = 1;

	// Camera resolution?
	this.Height = 0;
	this.Width  = 0;

	// TBC (to be commented)
	this.X = 0;
	this.Y = 0;

	// Rendering function
	this.Render = function(world)
	{
		// Check that 'world' item exists
		if(!world)
		{
			return; // 'world' is missing, exit early
		}

		// Check that 'Camera.Element' exists
		if(!this.Element)
		{
			return;
		}

		var height = this.Height >> this.Scale;
		var width  = this.Width >> this.Scale;
		
		// Use bitwise to move x&y to top corner of screen
		var x = this.X - (this.Width  >> 1 >> this.Scale);
		var y = this.Y - (this.Height >> 1 >> this.Scale);

		// Erm, search for things?
		var entities = world.Entities.Grid.Search(this.Height, this.Width, x, y);

		// Check to see if anything exists on world.entities
		if(!entities)
		{
			return; // Nothing to render, exit early
		}

		// How many things to render
		var count = entities.length;

		// Check that count was correctly set
		if(count < 1)
		{
			return;
		}

		var canvas;

		if(this.Element.firstChild)
		{
			if(this.Element.firstChild.nodeName != 'CANVAS')
			{
				while(this.Element.firstChild)
				{
					this.Element.removeChild(this.Element.firstChild);
				}
			}
			else
			{
				canvas = this.Element.firstChild;
			}
		}

		if(!canvas)
		{
			canvas = document.createElement('canvas');
		}

		var context;

		if(canvas)
		{
			canvas.setAttribute('height', height);
			canvas.setAttribute('width',  width);

			context = canvas.getContext('2d');

			context.clearRect (0, 0, width, height);
		}

		var zones = world.Zones.List();

		for(var zone in zones)
		{
			var size = 1 << 7 << 4;

			var xZone = (zones[zone][0] << 7 << 4) - x;
			var yZone = (zones[zone][1] << 7 << 4) - y;

			if(!canvas)
			{
				// TODO: Create DIV zone background.
			}
			else
			{
				context.fillStyle = '#9FE30E';
				context.fillRect(xZone, yZone, size, size);
			}
		}

		for(var i = 0; i < count; i++)
		{
			// Select an item from world.Entities
			var entity = entities[i];
			// Set xx/yy to the entity position adjusted from the camera.
			var xx = entity.X - x;
			var yy = entity.Y - y;

			if(!canvas)
			{
				var element = document.createElement('div');

				element.style.left = xx + 'px';
				element.style.top = yy + 'px';

				entity.Render(element);

				this.Element.appendChild(element);
			}
			else
			{
				entity.Render();

				var rgb = entity.Style.Background.Color;

				if(rgb)
				{
					context.fillStyle = rgb;
					context.fillRect(xx, yy, entity.Width, entity.Height);
				}

				var src = entity.Style.Background.Image;

				if(!src)
				{
					continue;
				}

				if(!this.Bitmaps[src])
				{
					this.Bitmaps[src] = new Image();
					this.Bitmaps[src].src = src;
				}

				if(!this.Bitmaps[src].complete)
				{
					continue;
				}

				var offsetX = -entity.Style.Background.Position.X;
				var offsetY = -entity.Style.Background.Position.Y;

				context.drawImage(this.Bitmaps[src], offsetX, offsetY, entity.Width, entity.Height, xx, yy, entity.Width, entity.Height);
			}
		}

		if(canvas)
		{
			this.Element.appendChild(canvas);
		}
	};

	this.OnResize = function(event)
	{
		this.Height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		this.Width  = Math.max(document.documentElement.clientWidth,  window.innerWidth  || 0);

		if(!this.Element)
		{
			return;
		}

		while(this.Element.firstChild)
		{
			this.Element.removeChild(this.Element.firstChild);
		}

		this.Element.style.height = this.Height + 'px';
		this.Element.style.width  = this.Width  + 'px';

		this.Render(world);
	};

	this.OnResize(undefined);
}