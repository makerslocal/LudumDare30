/*
* entity.weapon.js
*/

Weapon.prototype = new Entity();

function Weapon()
{
	Entity.apply(this, arguments);
}