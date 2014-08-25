Snake.prototype = new Monster();

function Snake()
{
	this.Style.Background.Image = 'sprites/spritesheet_use.png';

	this.Style.Background.Position.X = -144;
	this.Style.Background.Position.Y = -224;

	this.Render = function(element)
	{
		switch(this.Direction)
		{
			case Enums.Directions.Down.ID:
				this.Style.Background.Position.X = -144;
				break;
			case Enums.Directions.Left.ID:
				this.Style.Background.Position.X = -224;
				break;
			case Enums.Directions.Right.ID:
				this.Style.Background.Position.X = -224;
				break;
			case Enums.Directions.Up.ID:
				this.Style.Background.Position.X = -240;
				break;
		}

		if(!element)
		{
			return; // No element to render
		}

		element.setAttribute('class', 'snake');
	}

	var self = this;

	Engine.AddListener(function(cycles)
	{
		if(cycles % 4)
		{
			return;
		}

		self.Wander();
	});
}