Floor.prototype = new Entity();
Floor.prototype.constructor = Entity;

function Floor()
{
	this.Render = function(element)
	{
		if(!element)
		{
			return;
		}

		element.setAttribute('class', 'floor');
	}
}