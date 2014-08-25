var Inventory = new Object();

Inventory.__Item = undefined;

Inventory.__Items = new Object();

Inventory.Add = function(item)
{
	if(!item)
	{
		return;
	}

	if(this.Contains(item))
	{
		return;
	}

	if(!this.__Items[item.Name])
	{
		this.__Items[item.Name] = new Array();
	}

	this.__Items[item.Name].push(item);
};

Inventory.Contains = function(item)
{
	if(!item)
	{
		return false;
	}

	if(!this.__Items[item.Name])
	{
		return false;
	}

	for(var i = 0; i < this.__Items[item.Name].length; i++)
	{
		if(this.__Items[item.Name][i] == item)
		{
			return true;
		}
	}

	return false;
};

Inventory.OnAction = function()
{
	if(!this.__Item)
	{
		return;
	}

	if(!this.__Item.OnAction)
	{
		return;
	}

	this.__Item.OnAction();
}

Inventory.Render = function(element)
{
	element = document.getElementById('inventory_items') || element;

	if(!element)
	{
		return;
	}

	while(element.firstChild)
	{
		element.removeChild(element.firstChild);
	}

	for(var item in this.__Items)
	{
		if(!this.__Items[item])
		{
			continue;
		}

		if(!this.__Items[item].length)
		{
			continue;
		}

		var child = document.createElement('div');

		child.onmouseup = function(event)
		{
			var item = event.target.firstChild.nodeValue;

			Inventory.Select(Inventory.__Items[item][0]);

			Inventory.Render(element);
		}

		if(Inventory.__Item && Inventory.__Item.Name == item)
		{
			child.setAttribute('class', 'selected item');
		}
		else
		{
			child.setAttribute('class', 'item');
		}

		this.__Items[item][0].Render(child);

		if(this.__Items[item].length > 1)
		{
			child.appendChild(document.createElement('br'));
			child.appendChild(document.createTextNode('x' + this.__Items[item].length));
		}

		element.appendChild(child);
	}
}

Inventory.Remove = function(item)
{
	if(!item)
	{
		return;
	}

	if(!this.__Items[item.Name])
	{
		return;
	}

	for(var i = 0; i < this.__Items[item.Name].length; i++)
	{
		if(this.__Items[item.Name][i] == item)
		{
			this.__Items[item.Name].splice(i--, 1);
		}
	}

	if(item == this.__Item)
	{
		if(this.__Items[item.Name].length)
		{
			this.Select(this.__Items[item.Name][0]);
		}
		else
		{
			this.__Item = undefined;
		}
	}

	delete this.__Items[i];
};

Inventory.Select = function(item)
{
	if(!item)
	{
		return;
	}

	if(!this.Contains(item))
	{
		return;
	}

	this.__Item = item;
};