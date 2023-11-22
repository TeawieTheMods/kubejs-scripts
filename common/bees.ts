import type { ConfigurableBee } from "../types/productivebees";

interface BeeDefinition {
	name: string;
	bee: ConfigurableBee;
	breeding_recipe?: [string, string];
	conversion_recipe?: BeeConversionDefinition;
	comb_output: BeeCombOutputDefinition;
}

interface BeeConversionDefinition {
	from: string;
	with: string;
}

interface BeeCombOutputDefinition {
	item: string;
	range?: { min: number; max: number };
	chance?: number;
	do_blocks: boolean;
}

export const bees: Record<string, BeeDefinition> = {
	bacon: {
		name: "Bacon Bee",
		bee: {
			primaryColor: "#bddada",
			secondaryColor: "#d0581f",
			flowerTag: "minecraft:flowers",
			conditions: [
				{
					type: "forge:mod_loaded",
					modid: "productivebees",
				},
			],
		},
		breeding_recipe: ["productivebees:zombie", "productivebees:farmer_bee"],
		conversion_recipe: {
			from: "productivebees:zombie",
			with: "minecraft:porkchop",
		},
		comb_output: {
			item: "minecraft:porkchop",
			range: {
				min: 1,
				max: 4,
			},
			chance: 90,
			do_blocks: true,
		},
	},
};

export default bees;
