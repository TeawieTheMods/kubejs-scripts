let highRate = 2;


let lowRate = highRate * 1.5

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

// deep
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