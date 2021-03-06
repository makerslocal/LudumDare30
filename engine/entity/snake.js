Snake.prototype = new Monster();

function Snake()
{
	Monster.apply(this, arguments);

	this.Style.Background.Image = 'sprites.png';

	this.Style.Background.Position.X = 0;
	this.Style.Background.Position.Y = -1504;

	this.OnCycle = function(cycles)
	{
		if(cycles % 4)
		{
			return;
		}

		this.Wander();
	}

	this.Render = function(element)
	{
		if(!this.Direction)
		{
			return;
		}
		
		switch(this.Direction.ID)
		{
			case Enums.Directions.Down.ID:
				this.Style.Background.Position.X = -((Engine.Cycles % 3) << 4);
				break;
			case Enums.Directions.Left.ID:
				this.Style.Background.Position.X = -(((Engine.Cycles % 3) << 4) + 96)
				break;
			case Enums.Directions.Right.ID:
				this.Style.Background.Position.X = -(((Engine.Cycles % 3) << 4) + 48);
				break;
			case Enums.Directions.Up.ID:
				this.Style.Background.Position.X = -(((Engine.Cycles % 3) << 4) + 144);
				break;
		}

		if(!element)
		{
			return; // No element to render
		}

		element.setAttribute('class', 'snake');
	}
}