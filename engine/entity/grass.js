Grass.prototype = new Entity();
Grass.prototype.constructor = Entity;

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
