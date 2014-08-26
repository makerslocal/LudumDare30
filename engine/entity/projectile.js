Projectile.prototype = new Weapon();

function Projectile()
{	
	Weapon.apply(this, arguments);

	this.Direction = undefined;

	this.OnCycle = function(cycles)
	{
		if(!this.Direction)
		{
			return;
		}

		var x = this.Direction.X * this.Width;
		var y = this.Direction.Y * this.Height;

		var entities = this.Scan(x, y);

		if(entities)
		{
			for (var i in entities)
			{
				var entity = entities[i];

				if (!(entity instanceof Monster))
				{
					continue;
				}

				entity.OnCycle = undefined;

				entity.World.Entities.Remove(entity);
			}

			this.World.Entities.Remove(this);

			return;
		}

		this.World.Entities.Grid.Remove(this);
		this.X += x;
		this.Y += y;
		this.World.Entities.Grid.Add(this);
	}
}