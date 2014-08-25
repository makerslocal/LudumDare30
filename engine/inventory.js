var Inventory = new Object();

Inventory.__Item = undefined;

Inventory.__Items = new Array();

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

	this.__Items.push(item);
};

Inventory.Contains = function(item)
{
	if(!item)
	{
		return false;
	}

	for(var i = 0; i < this.__Items.length; i++)
	{
		if(this.__Items[i] == item)
		{
			return true;
		}
	}

	return false;
};

Inventory.OnAction = function()
{
	if(!Inventory.__Item)
	{
		return;
	}

	if(!Inventory.__Item.OnAction)
	{
		return;
	}

	Inventory.__Item.OnAction();
}

Inventory.Render = function(element)
{
	if(!element)
	{
		return;
	}
}

Inventory.Remove = function(item)
{
	if(!item)
	{
		return;
	}

	if(item.length < 1)
	{
		return;
	}

	for(var i = 0; i < item.length; i++)
	{
		if(this.__Items[i] == item)
		{
			this.__Items.splice(i--, 1);
		}
	}
};

Inventory.Select = function(item)
{
	if(!item)
	{
		return;
	}

	if(!Inventory.Contains(item))
	{
		return;
	}

	Inventory.__Item = item;
};