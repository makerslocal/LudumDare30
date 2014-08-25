Sword.prototype = new Item();

function Sword()
{
	Item.apply(this, arguments);

	this.Style.Background.Image = 'sprites.png';
	this.Style.Background.Position.X = -432;
	this.Style.Background.Position.Y = -1520;

	this.OnPickup = function()
	{
		Inventory.Add(new Items_Sword());
	}

	this.Render = function(element)
	{
		if(!element)
		{
			return; // No element to render
		}

		element.setAttribute('class', 'sword');
	}
}