Grass.prototype = new Entity();

function Grass()
{
	this.Render = function(element)
	{
		if(!element)
		{
			return;
		}

		element.setAttribute('class', 'grass');
	}
}
