Wood.prototype = new Entity();
Wood.prototype.constructor = Entity;

function Wood()
{
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
