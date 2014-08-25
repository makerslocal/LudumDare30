Grass.prototype = new Entity();

function Grass()
{
	Entity.apply(this, arguments);

	this.Render = function(element)
	{
		if(!element)
		{
			return;
		}

		element.setAttribute('class', 'grass');
	}
}
