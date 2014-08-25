/*
 * item.rock.js
 */

Rock.prototype = new Entity();
Rock.prototype.constructor = Entity;

function Rock()
{
	this.Style.Background.Image = 'sprites/spritesheet_use.png';
	this.Style.Background.Position.X = -480;
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