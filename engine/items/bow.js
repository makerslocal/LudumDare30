Items_Bow.prototype = new Items_Item('Bow');

function Items_Bow()
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

		element.appendChild(document.createTextNode('Bow'));
	}
}