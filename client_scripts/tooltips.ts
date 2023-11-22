let outputRemove2 = ["botania:mana_fluxfield", "bhc:blade_of_vitality"];

ItemEvents.tooltip((event) => {
	for (let i in outputRemove2) {
		event.add(outputRemove2[i] as any, "§4This item has been disabled.");
	}
});
