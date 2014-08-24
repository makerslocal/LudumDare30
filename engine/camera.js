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

		while(this.Element.firstChild)
		{
			this.Element.removeChild(this.Element.firstChild);
		}
		
		// Use bitwise to move x&y to top corner of screen
		var x = this.X - (this.Width  >> 1);
		var y = this.Y - (this.Height >> 1);

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

		var canvas = document.createElement('canvas');

		var context;

		if(canvas)
		{
			canvas.setAttribute('height', this.Height);
			canvas.setAttribute('width',  this.Width);

			context = canvas.getContext('2d');
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

				var src = entity.Style.Background.Image;

				if(src)
				{
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

		this.Element.style.height = this.Height + 'px';
		this.Element.style.width  = this.Width  + 'px';
	};

	this.OnResize(undefined);
}
