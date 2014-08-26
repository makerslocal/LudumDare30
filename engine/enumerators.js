var Enums = {

	Controls : {

		Action : {
			KeyCodes : [
				32, // Spacebar
				69, // E
			],
			ID : 'action',
		},

		Down : {
			KeyCodes  : [
				40, // Down,
				83, // S
				98, // Down (numberpad)
			],
			ID : 'down',
		},

		Inventory : {
			KeyCodes : [
				9,  // Tab
				73, // I
			],
			ID : 'inventory',
		},

		Left : {
			KeyCodes  : [
				37,  // Left,
				65,  // A
				100, // Left (numberpad)
			],
			ID : 'left',
		},

		Right : {
			KeyCodes  : [
				39,  // Right,
				68,  // D
				102, // Right (numberpad)
			],
			ID : 'right',
		},

		Strafe : {
			KeyCodes : [
				16, // Shift
			],
			ID : 'strafe',
		},

		Up : {
			KeyCodes  : [
				38,  // Up,
				87,  // W
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
	
	Entities : {
		
		Tree : { ID : 0x1 },
		Floor : { ID : 0x2 },
		Stone : { ID : 0x3 },
		Wood : { ID : 0x4 },
		Rock : { ID : 0x5 },
		Jelly : { ID : 0x9 },
		Wizard : { ID : 0x7 },
		Snake : { ID : 0xB },
		Arrrow : { ID : 0x9 },
		Arrow : { ID : 0xE },

	},
		
};
