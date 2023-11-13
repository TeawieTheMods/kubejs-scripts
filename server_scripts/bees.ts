import bees from "../common/bees"

ServerEvents.highPriorityData(event => {
	for (const id in bees) {
		event.addJson(`kubejs:productivebees/productivebees/${id}.json`, bees[id].bee as any)
	}
})

ServerEvents.recipes(event => {
	for (const id in bees) {
		const bee_id = `kubejs:${id}`;
		const bee = bees[id];
		if (bee.breeding_recipe != undefined) {
			event.custom({
				type: "productivebees:bee_breeding",
				parent1: bee.breeding_recipe[0],
				parent2: bee.breeding_recipe[1],
				offspring: [
					bee_id
				],
				conditions: [
					{
						type: "productivebees:bee_exists",
						bee: bee.breeding_recipe[0]
					},
					{
						type: "productivebees:bee_exists",
						bee: bee.breeding_recipe[1]
					},
					{
						type: "productivebees:bee_exists",
						bee: bee_id
					}
				]
			} as any)
		}

		if (bee.conversion_recipe != undefined) {
			event.custom({
				"type": "productivebees:bee_conversion",
				"source": bee.conversion_recipe.from,
				"result": bee_id,
				"item": {
					"item": bee.conversion_recipe.with
				},
				"conditions": [
					{
						"type": "productivebees:bee_exists",
						"bee": bee.conversion_recipe.from
					},
					{
						"type": "productivebees:bee_exists",
						"bee": bee_id
					}
				]
			} as any)
		}

		event.custom(
			{
				"type": "productivebees:advanced_beehive",
				"ingredient": bee_id,
				"results": [
					{
						"item": {
							"type": "forge:nbt",
							"item": "productivebees:configurable_honeycomb",
							"nbt": {
								"EntityTag": {
									"type": bee_id
								}
							}
						}
					},
					{
						"item": {
							"item": "the_bumblezone:pollen_puff"
						},
						"chance": 5
					}
				],
				"conditions": [
					{
						"type": "productivebees:bee_exists",
						"bee": bee_id
					}
				]
			}  as any
		)

		const comb_output: any = {
			"item": {
				"item": bee.comb_output.item
			}
		};

		if (bee.comb_output.range != undefined) {
			comb_output.min = bee.comb_output.range.min
			comb_output.max = bee.comb_output.range.max
		}

		if (bee.comb_output.chance != undefined) {
			comb_output.chance = bee.comb_output.chance
		}

		event.custom(
			{
				"type": "productivebees:centrifuge",
				"ingredient": {
					"type": "forge:nbt",
					"item": "productivebees:configurable_honeycomb",
					"nbt": {
						"EntityTag": {
							"type": bee_id
						}
					}
				},
				"outputs": [
					comb_output,
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

		if (bee.comb_output.do_blocks) {
			if (bee.comb_output.range != undefined) {
				comb_output.min = bee.comb_output.range.min * 4
				comb_output.max = bee.comb_output.range.max * 4
			}
			event.custom(
				{
					"type": "productivebees:centrifuge",
					"ingredient": {
						"type": "forge:nbt",
						"item": "productivebees:configurable_comb",
						"nbt": {
							"EntityTag": {
								"type": bee_id
							}
						}
					},
					"outputs": [
						comb_output,
						{
							"item": {
								"tag": "forge:wax"
							},
							"min": 4,
							"max": 4
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
		}
	}
})