Arrow.prototype = new Item();

function Arrow()
{
	this.Style.Background.Image = 'sprites.png';
	this.Style.Background.Position.X = -400;
	this.Style.Background.Position.Y = -1520;

	this.OnPickup = function()
	{
		Inventory.Add(new Items_Arrow());
	}

	this.Render = function(element)
	{
		if(!element)
		{
			return; // No element to render
		}

		element.setAttribute('class', 'arrow');
	}
}