ServerEvents.highPriorityData(event => {
	let json = {
		"primaryColor": "#bddada",
		"secondaryColor": "#d0581f",
		"flowerTag": "minecraft:flowers",
		"name": "Baconator",
		"conditions": [
			{
				"type": "forge:mod_loaded",
				"modid": "productivebees"
			}
		]
	}
	event.addJson(`kubejs:productivebees/productivebees/bacon.json`, json as any)
})

ServerEvents.recipes(event => {
	event.custom({
		type: "productivebees:bee_breeding",
		parent1: "productivebees:zombie",
		parent2: "productivebees:farmer_bee",
		offspring: [
			"kubejs:bacon"
		],
		conditions: [
			{
				type: "productivebees:bee_exists",
				bee: "productivebees:zombie"
			},
			{
				type: "productivebees:bee_exists",
				bee: "productivebees:bacon"
			}
		]
	} as any)
})

ServerEvents.recipes(event => {
	event.custom({
		"type": "productivebees:bee_conversion",
		"source": "productivebees:zombie",
		"result": "kubejs:bacon",
		"item": {
			"item": "minecraft:porkchop"
		},
		"conditions": [
			{
				"type": "productivebees:bee_exists",
				"bee": "productivebees:zombie"
			},
			{
				"type": "productivebees:bee_exists",
				"bee": "kubejs:bacon"
			}
		]
	} as any)
})

ServerEvents.recipes(event => {
	event.custom(
		{
			"type": "productivebees:advanced_beehive",
			"ingredient": "kubejs:bacon",
			"results": [
				{
					"item": {
						"type": "forge:nbt",
						"item": "productivebees:configurable_honeycomb",
						"nbt": {
							"EntityTag": {
								"type": "kubejs:bacon"
							}
						}
					}
				}
			],
			"conditions": [
				{
					"type": "productivebees:bee_exists",
					"bee": "kubejs:bacon"
				}
			]
		}  as any
	)
})

ServerEvents.recipes(event => {
	event.custom(
		{
			"type": "productivebees:centrifuge",
			"ingredient": {
				"type": "forge:nbt",
				"item": "productivebees:configurable_honeycomb",
				"nbt": {
					"EntityTag": {
						"type": "kubejs:bacon"
					}
				}
			},
			"outputs": [
				{
					"item": {
						"item": "minecraft:porkchop"
					},
					"min": 1,
					"max": 4,
					"chance": 90
				},
				{
					"item": {
						"tag": "forge:wax"
					}
				},
				{
					"fluid": {
							"fluid": "productivebees:honey"
					},
					"amount": 50
				}
			]
		} as any
	)
})

ServerEvents.recipes(event => {
	event.custom(
		{
			"type": "productivebees:centrifuge",
			"ingredient": {
				"type": "forge:nbt",
				"item": "productivebees:configurable_comb",
				"nbt": {
					"EntityTag": {
						"type": "kubejs:bacon"
					}
				}
			},
			"outputs": [
				{
					"item": {
						"item": "minecraft:porkchop"
					},
					"min": 4,
					"max": 16,
					"chance": 90
				},
				{
					"item": {
						"tag": "forge:wax"
					}
				},
				{
					"fluid": {
							"fluid": "productivebees:honey"
					},
					"amount": 200
				}
			]
		} as any
	)
})