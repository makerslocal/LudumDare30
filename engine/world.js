/*
 * World.js
 * The world (well that was easy)
 */

function World()
{
	this.Entities = new Entities(this);

	this.IsDirty = false;

	this.Zones = new Zones(this);
}