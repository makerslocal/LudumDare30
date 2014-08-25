/*
 * World.js
 * The world (well that was easy)
 */

function World()
{
	this.Entities = new Entities(this);

	this.Zones = new Zones(this);

	this.Zones.Add(0, 0);
}