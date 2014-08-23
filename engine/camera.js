function Camera(element)
{
	if(!element)
	{
		return;
	}

	this.Element = element;

	this.Height = 720;
	this.Width = 1280;

	this.X = 0;
	this.Y = 0;

	this.Render = function(world)
	{
		if(!world)
		{
			return;
		}

		if(!this.Element)
		{
			return;
		}

		while(this.Element.firstChild)
		{
			this.Element.removeChild(this.Element.firstChild);
		}

		var x = this.X - (this.Width  >> 1);
		var y = this.Y - (this.Height >> 1);

		var entities = world.Entities.Grid.Search(this.Height, this.Width, x, y);

		if(!entities)
		{
			return;
		}

		var count = entities.length;

		if(count < 1)
		{
			return;
		}

		for(var i = 0; i < count; i++)
		{
			var entity = entities[i];

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