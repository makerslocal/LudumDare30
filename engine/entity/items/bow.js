Bow.prototype = new Item();

function Bow()
{
	this.Style.Background.Image = 'sprites.png';
	this.Style.Background.Position.X = -416;
	this.Style.Background.Position.Y = -1520;

	this.OnPickup = function()
	{
		Inventory.Add(new Items_Bow());
	}

	this.Render = function(element)
	{
		if(!element)
		{
			return; // No element to render
		}

		element.setAttribute('class', 'bow');
	}
}