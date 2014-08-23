Tree.prototype = new Entity();
Tree.prototype.constructor = Entity;

function Tree()
{
	this.Render = function(element)
	{
		if(!element)
		{
			return;
		}

		element.setAttribute('class', 'tree');
	}
}