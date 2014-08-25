var Enums = {

	Controls : {

		Action : {
			KeyCodes : [
				69, // E
				32, // Spacebar
			],
			ID : 'action',
		},

		Down : {
			KeyCodes  : [
				83, // S
				40, // Down,
				98, // Down (numberpad)
			],
			ID : 'down',
		},

		Inventory : {
			KeyCodes : [
				73, // I
				16, // Shift
			],
			ID : 'inventory',
		},

		Left : {
			KeyCodes  : [
				65,  // A
				37,  // Left,
				100, // Left (numberpad)
			],
			ID : 'left',
		},

		Right : {
			KeyCodes  : [
				68,  // D
				39,  // Right,
				102, // Right (numberpad)
			],
			ID : 'right',
		},

		Up : {
			KeyCodes  : [
				87,  // W
				38,  // Up,
				104, // Up (numberpad)
			],
			ID : 'up',
		},
	},

	Directions : {

		Down : {
			ID : 'down',
			X  : 0,
			Y  : 1,
		},

		Left : {
			ID : 'left',
			X  : -1,
			Y  : 0,
		},

		Right : {
			ID : 'right',
			X  : 1,
			Y  : 0,
		},

		Up : {
			ID : 'up',
			X  : 0,
			Y  : -1,
		},
	},
};