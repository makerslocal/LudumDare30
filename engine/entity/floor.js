Floor.prototype = new Entity();

function Floor()
{
	Entity.apply(this, arguments);

	this.Render = function(element)
	{
		if(!element)
		{
			return;
		}

		element.setAttribute('class', 'floor');
	}
}