/*
 * item.rock.js
 */

Rock.prototype = new Entity();

function Rock()
{
	this.Style.Background.Image = 'sprites.png';
	this.Style.Background.Position.X = -272;
	this.Style.Background.Position.Y = -320;

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