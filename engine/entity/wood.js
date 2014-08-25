Wood.prototype = new Entity();

function Wood()
{
	Entity.apply(this, arguments);

	this.Style.Background.Image = 'sprites.png';
	this.Style.Background.Position.X = -(208 + (Math.floor(Math.random() * 2) << 4));
	this.Style.Background.Position.Y = -1456;

	this.Collide = function(entity)
	{
		return true;
	}

	this.Render = function(element)
	{
		if(!element)
		{
			return;
		}

		element.setAttribute('class', 'wood');
	}
}
