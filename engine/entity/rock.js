/*
 * item.rock.js
 */

Rock.prototype = new Entity();

function Rock()
{
	Entity.apply(this, arguments);

	this.Style.Background.Image = 'sprites.png';
	this.Style.Background.Position.X = -272;
	this.Style.Background.Position.Y = -(304 + (Math.floor(Math.random() * 2) << 4));

	this.Collide = function(entity)
	{
		return true;
	}

	this.Render = function(element)
	{
		if(!element)
		{
			return;
		}

		element.setAttribute('class', 'rock');
	}
}