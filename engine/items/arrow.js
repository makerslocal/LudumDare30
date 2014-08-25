Items_Arrow.prototype = new Items_Item('Arrow');

function Items_Arrow()
{
	this.OnAction = function()
	{
		
	}

	this.Render = function(element)
	{
		if(!element)
		{
			return; // No element to render
		}

		element.appendChild(document.createTextNode('Arrow'));
	}
}