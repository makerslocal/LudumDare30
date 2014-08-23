/*
 * entity.tree.js
 */

// Prototype sets Tree to be a child of Entity
Tree.prototype = new Entity();
Tree.prototype.constructor = Entity;

// The Tree object
function Tree()
{
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
