Floor.prototype = new Entity();

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