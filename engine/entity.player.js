Player.prototype = new Entity();
Player.prototype.constructor = Entity;

function Player()
{
	this.Render = function(element)
	{
		if(!element)
		{
			return;
		}

		element.setAttribute('class', 'player');
	}
}