ServerEvents.recipes(event => {
	event.custom({
		"type": "botanypots:crop",
		"seed": {
			"item": "candlelight:tomato_seeds"
		},
		"categories": [
			"dirt",
			"farmland"
		],
		"growthTicks": 1200,
		"display": {
			"type": "botanypots:aging",
			"block": "candlelight:tomato_crop"
		},
		"drops": [
			{
				"chance": 1,
				"output": {
					"item": "candlelight:tomato"
				},
				"minRolls": 1,
				"maxRolls": 2
			},
			{
				"chance": 0.05,
				"output": {
					"item": "candlelight:tomato_seeds"
				},
				"minRolls": 1,
				"maxRolls": 1
			}
			],
			"bookshelf:load_conditions": [
				{
					"type": "bookshelf:item_exists",
					"values": [
						"candlelight:tomato_seeds"
					]
				}
			]
	} as any)
})