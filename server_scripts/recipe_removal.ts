let outputRemove = ["botania:mana_fluxfield"];

ServerEvents.recipes(event => {
	for (let i in outputRemove) {
		event.remove({output: `${outputRemove[i]}` as any})
	}
})