/*
 * entity.tree.js
 */

// Prototype sets Tree to be a child of Entity
Tree.prototype = new Entity();

// The Tree object
function Tree()
{
	Entity.apply(this, arguments);

	this.Style.Background.Image = 'sprites.png';
	this.Style.Background.Position.X = -272;
	this.Style.Background.Position.Y = -(208 + (Math.floor(Math.random() * 2) << 4));

	// Create a new Tree object
	this.Collide = function(entity)
	{
		return true;
	}

	this.Render = function(element)
	{
		if(!element)
		{
			return; // No object to generate tree from
		}

		element.setAttribute('class', 'tree');
	}
}