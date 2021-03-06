Axe.prototype = new Item();

function Axe()
{
	Item.apply(this, arguments);

	this.Style.Background.Image = 'sprites.png';
	this.Style.Background.Position.X = -464;
	this.Style.Background.Position.Y = -1520;

	this.OnPickup = function()
	{
		Inventory.Add(new Items_Axe());
	}

	this.Render = function(element)
	{
		if(!element)
		{
			return; // No element to render
		}

		element.setAttribute('class', 'axe');
	}
}