let highRate = 2;
let lowRate = highRate * 1.5

/* Template
ServerEvents.highPriorityData(event => {
	let json = {
		
	};

	event.addJson(`apotheosis:path/to/thingy.json`, json as any)
}) */


// shallow rogue spawner
ServerEvents.highPriorityData(event => {
	let json = {
			"forge:conditions": [{
				"type": "apotheosis:module",
				"module": "adventure"
			}],
			"feature": "apotheosis:rogue_spawner",
			"placement": [{
					"type": "minecraft:count",
					"count": highRate
				},
				{
					"type": "minecraft:in_square"
				},
				{
					"type": "minecraft:height_range",
					"height": {
						"type": "minecraft:uniform",
						"max_inclusive": {
							"below_top": 0
						},
						"min_inclusive": {
							"absolute": 0
						}
					}
				},
				{
					"type": "minecraft:biome"
				}
			]
	}

	console.log("Thats not so deep");
	event.addJson(`apotheosis:worldgen/placed_feature/rogue_spawner.json`, json as any)
})

// deep rogue spawner
ServerEvents.highPriorityData(event => {
	let json = {
		"forge:conditions": [{
			"type": "apotheosis:module",
			"module": "adventure"
		}],
		"feature": "apotheosis:rogue_spawner",
		"placement": [{
				"type": "minecraft:count",
				"count": lowRate
			},
			{
				"type": "minecraft:in_square"
			},
			{
				"type": "minecraft:height_range",
				"height": {
					"type": "minecraft:uniform",
					"max_inclusive": {
						"absolute": -1
					},
					"min_inclusive": {
						"above_bottom": 6
					}
				}
			},
			{
				"type": "minecraft:biome"
			}
		]
	}

	console.log("Thats deep");
	event.addJson(`apotheosis:worldgen/placed_feature/rogue_spawner_deep.json`, json as any)
})

// elytra affix
ServerEvents.highPriorityData(event => {
	let json = {
		"conditions": [
			{ "type": "forge:false" }
		]
	};

	event.addJson(`apotheosis:affixes/armor/attribute/winged.json`, json as any)
})

// high boss dungeon
ServerEvents.highPriorityData(event => {
	let json = {
		"forge:conditions": [{
			"type": "apotheosis:module",
			"module": "adventure"
		}],
		"feature": "apotheosis:boss_dungeon",
		"placement": [{
				"type": "minecraft:count",
				"count": highRate
			},
			{
				"type": "minecraft:in_square"
			},
			{
				"type": "minecraft:height_range",
				"height": {
					"type": "minecraft:uniform",
					"max_inclusive": {
						"below_top": 0
					},
					"min_inclusive": {
						"absolute": 0
					}
				}
			},
			{
				"type": "minecraft:biome"
			}
		]
	};

	event.addJson(`apotheosis:worldgen/placed_feature/boss_dungeon.json`, json as any)
})

// high boss dungeon 2
ServerEvents.highPriorityData(event => {
	let json = {
		"forge:conditions": [{
			"type": "apotheosis:module",
			"module": "adventure"
		}],
		"feature": "apotheosis:boss_dungeon_2",
		"placement": [{
				"type": "minecraft:count",
				"count": highRate
			},
			{
				"type": "minecraft:in_square"
			},
			{
				"type": "minecraft:height_range",
				"height": {
					"type": "minecraft:uniform",
					"max_inclusive": {
						"below_top": 0
					},
					"min_inclusive": {
						"absolute": 0
					}
				}
			},
			{
				"type": "minecraft:biome"
			}
		]
	};

	event.addJson(`apotheosis:worldgen/placed_feature/boss_dungeon_2.json`, json as any)
})

// deep boss dungeon
ServerEvents.highPriorityData(event => {
	let json = {
		"forge:conditions": [{
			"type": "apotheosis:module",
			"module": "adventure"
		}],
		"feature": "apotheosis:boss_dungeon",
		"placement": [{
				"type": "minecraft:count",
				"count": lowRate
			},
			{
				"type": "minecraft:in_square"
			},
			{
				"type": "minecraft:height_range",
				"height": {
					"type": "minecraft:uniform",
					"max_inclusive": {
						"absolute": -1
					},
					"min_inclusive": {
						"above_bottom": 6
					}
				}
			},
			{
				"type": "minecraft:biome"
			}
		]
	};

	event.addJson(`apotheosis:worldgen/placed_feature/boss_dungeon_deep.json`, json as any)
})

// deep boss dungeon 2
ServerEvents.highPriorityData(event => {
	let json = {
		"forge:conditions": [{
			"type": "apotheosis:module",
			"module": "adventure"
		}],
		"feature": "apotheosis:boss_dungeon_2",
		"placement": [{
				"type": "minecraft:count",
				"count": lowRate
			},
			{
				"type": "minecraft:in_square"
			},
			{
				"type": "minecraft:height_range",
				"height": {
					"type": "minecraft:uniform",
					"max_inclusive": {
						"absolute": -1
					},
					"min_inclusive": {
						"above_bottom": 6
					}
				}
			},
			{
				"type": "minecraft:biome"
			}
		]
	};

	event.addJson(`apotheosis:worldgen/placed_feature/boss_dungeon_2_deep.json`, json as any)
})