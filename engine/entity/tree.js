/*
 * entity.tree.js
 */

// Prototype sets Tree to be a child of Entity
Tree.prototype = new Entity();
Tree.prototype.constructor = Entity;

// The Tree object
function Tree()
{
	this.Style.Background.Image = 'sprites/spritesheet_use.png';
	this.Style.Background.Position.X = -512;
	this.Style.Background.Position.Y = -224;

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