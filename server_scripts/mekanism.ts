ServerEvents.recipes(event => {
	(event.remove as any)({id: `mekanism:storage_blocks/salt`});

	(event.shaped as any)('1x mekanism:block_salt', ["AA", "AA"], {
		A: {tag: `forge:salt`},
	});
})