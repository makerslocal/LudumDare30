Pickaxe.prototype = new Item();

function Pickaxe()
{
	this.Style.Background.Image = 'sprites.png';
	this.Style.Background.Position.X = -448;
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