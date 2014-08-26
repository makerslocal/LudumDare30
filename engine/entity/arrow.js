Arrrow.prototype = new Projectile();

function Arrrow()
{
	Projectile.apply(this, arguments);

	this.Style.Background.Image = 'sprites.png';

	this.Style.Background.Position.X = -400;
	this.Style.Background.Position.Y = -1472;

	this.Collide = function(entity)
	{
		return true;
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
				this.Style.Background.Position.Y = -1472;
				break;
			case Enums.Directions.Left.ID:
				this.Style.Background.Position.Y = -1456;
				break;
			case Enums.Directions.Right.ID:
				this.Style.Background.Position.Y = -1488;
				break;
			case Enums.Directions.Up.ID:
				this.Style.Background.Position.Y = -1504;
				break;
		}

		if(!element)
		{
			return; // No element to render
		}

		element.setAttribute('class', 'arrow');
	}
}