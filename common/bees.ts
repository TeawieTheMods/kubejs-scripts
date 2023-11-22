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
	quenched_allay: {
		name: "Quenched Allay Bee",
		bee: {
			primaryColor: "#7217c4",
			secondaryColor: "#2b9dad",
			tertiaryColor: "#2b9dad",
			particleColor: "#2b9dad",
			renderer: "default_crystal",
			flowerBlock: "hexcasting:quenched_allay",
			size: 0.6,
		},
		conversion_recipe: {
			from: "productivebees:amethyst",
			with: "hexcasting:quenched_allay",
		},
		comb_output: {
			item: "hexcasting:quenched_allay_shard",
			chance: 25,
			do_blocks: true,
		},
	},
};

export default bees;
