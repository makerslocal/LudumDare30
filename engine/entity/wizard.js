Wizard.prototype = new Monster();

function Wizard()
{
	Monster.apply(this, arguments);

	this.Style.Background.Image = 'sprites.png';

	this.Style.Background.Position.X = 0;
	this.Style.Background.Position.Y = -1488;

	this.OnCycle = function(cycles)
	{
		if(cycles % 3)
		{
			return;
		}

		if(cycles % 6)
		{
			if(!this.Direction)
			{
				return
			}

			var x = this.Direction.X * this.Width + this.X;
			var y = this.Direction.Y * this.Height + this.Y;

			var entity = new Arrrow();
			entity.X = x;
			entity.Y = y;

			entity.Direction = this.Direction;
			this.World.Entities.Add(entity);
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
				this.Style.Background.Position.X = -(((Engine.Cycles >> 1) % 3) << 4);
				break;
			case Enums.Directions.Left.ID:
				this.Style.Background.Position.X = -((((Engine.Cycles >> 1) % 3) << 4) + 96)
				break;
			case Enums.Directions.Right.ID:
				this.Style.Background.Position.X = -((((Engine.Cycles >> 1) % 3) << 4) + 48);
				break;
			case Enums.Directions.Up.ID:
				this.Style.Background.Position.X = -((((Engine.Cycles >> 1) % 3) << 4) + 144);
				break;
		}

		if(!element)
		{
			return; // No element to render
		}

		element.setAttribute('class', 'wizard');
	}
}