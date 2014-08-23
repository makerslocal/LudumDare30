/*
 * Renders world
 */

function Camera(element)
{
	// Check to make sure the 'element' passed into 'Camera' exists.
	if(!element)
	{
		return; // Function was misscalled, exit early
	}
	
	// Create a child of Camera, set it to our passed in element
	this.Element = element;

	// Camera resolution?
	this.Height = 720;
	this.Width = 1280;

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

		// Clear all children of Camera.Element
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

		for(var i = 0; i < count; i++)
		{
			// Select an item from world.Entities
			var entity = entities[i];
			// Set xx/yy to the entity position adjusted from the camera.
			var xx = entity.X - x;
			var yy = entity.Y - y;

			var element = document.createElement('div');

			element.style.left = xx + 'px';
			element.style.top = yy + 'px';

			entity.Render(element);

			this.Element.appendChild(element);
		}
	};
}
