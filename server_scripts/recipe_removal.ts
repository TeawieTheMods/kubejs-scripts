let outputRemove = ["botania:mana_fluxfield", "bhc:blade_of_vitality"];

ServerEvents.recipes((event) => {
	for (let i in outputRemove) {
		event.remove({ output: `${outputRemove[i]}` as any });
	}
});
