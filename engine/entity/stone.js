Stone.prototype = new Entity();
Stone.prototype.constructor = Entity;

function Stone()
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

		element.setAttribute('class', 'stone');
	}
}
