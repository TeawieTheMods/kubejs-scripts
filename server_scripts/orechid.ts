const ores_stone = [
	"mekanism:tin_ore",
	"mekanism:osmium_ore",
	"mekanism:uranium_ore",
	"mekanism:fluorite_ore",
	"mekanism:lead_ore",
	"powah:uraninite_ore",
	"theurgy:sal_ammoniac_ore",
	"rftoolsbase:dimensionalshard_overworld",
	"create:zinc_ore",
];
const ores_deepslate = [
	"mekanism:deepslate_tin_ore",
	"mekanism:deepslate_osmium_ore",
	"mekanism:deepslate_uranium_ore",
	"mekanism:deepslate_fluorite_ore",
	"mekanism:deepslate_lead_ore",
	"powah:deepslate_uraninite_ore",
	"theurgy:deepslate_sal_ammoniac_ore",
	"create:deepslate_zinc_ore",
];
const ores_nether = ["rftoolsbase:dimensionalshard_nether"];

ServerEvents.recipes((event) => {
	for (const ore of ores_stone) {
		event.custom({
			type: "botania:orechid",
			input: {
				type: "block",
				block: "minecraft:stone",
			},
			output: {
				type: "block",
				block: ore,
			},
			weight: 7000,
		} as any);
	}
	for (const ore of ores_deepslate) {
		event.custom({
			type: "botania:orechid",
			input: {
				type: "block",
				block: "minecraft:deepslate",
			},
			output: {
				type: "block",
				block: ore,
			},
			weight: 75,
		} as any);
	}
	for (const ore of ores_nether) {
		event.custom({
			type: "botania:orechid_ignem",
			input: {
				type: "block",
				block: "minecraft:netherrack",
			},
			output: {
				type: "block",
				block: ore,
			},
			weight: 3635,
		} as any);
	}
});
