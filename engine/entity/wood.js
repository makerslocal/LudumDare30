Wood.prototype = new Entity();
Wood.prototype.constructor = Entity;

function Wood()
{
	this.Style.Background.Image = 'sprites/spritesheet_tools-set.png';
	this.Style.Background.Position.X = -32;
	this.Style.Background.Position.Y = -0;

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
