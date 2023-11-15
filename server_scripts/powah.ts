ServerEvents.recipes(event => {
	// Functions
	function averageRecipe(type, tier, capacitor, top, bottom) { // Solar Panel, Furnator, Magmator
		event.remove({output: `powah:${type}_${tier}`} as any);

		(event.shaped as any)(`1x powah:${type}_${tier}`, [
			"AAA", "BCB", "DDD"
		], {
			A: top,
			B: `powah:capacitor_${capacitor}`,
			C: `powah:dielectric_casing`,
			D: bottom
		})
	};

	function reactorRecipe(tier, capacitor, corner, middle) { // Reactor
		event.remove({output: `powah:reactor_${tier}`} as any);

		(event.shaped as any)(`1x powah:reactor_${tier}`, [
			"ABA", "BCB", "ABA"
		], {
			A: `powah:${corner}`,
			B: `powah:capacitor_${capacitor}`,
			C: `powah:${middle}`,
		})
	};

	function thermoRecipe(tier, topMiddle, capacitor, bottomCorner) { // Thermo Generator
		event.remove({output: `powah:thermo_generator_${tier}`} as any);

		(event.shaped as any)(`1x powah:thermo_generator_${tier}`, [
			"ABA", "CDC", "EFE"
		], {
			A: "powah:dielectric_paste",
			B: topMiddle,
			C: `powah:capacitor_${capacitor}`,
			D: `powah:dielectric_casing`,
			E: `powah:${bottomCorner}`,
			F: "powah:thermoelectric_plate"
		})
	};

	// Variables!
	let genTiers = ["starter", "basic", "hardened", "blazing", "niotic", "spirited", "nitro"];
	let capTiers = ["basic_tiny", "basic", "hardened", "blazing", "niotic", "spirited", "nitro"];
	let matTiers = ["powah:dielectric_paste", "minecraft:iron_ingot", "powah:steel_energized", "powah:crystal_blazing", "powah:crystal_niotic", "powah:crystal_spirited", "powah:crystal_nitro"];

	let solTiers = ["powah:photoelectric_pane", "powah:solar_panel_starter", "powah:solar_panel_basic", "powah:solar_panel_hardened", "powah:solar_panel_blazing", "powah:solar_panel_niotic", "powah:solar_panel_spirited"];
	let furTiers = ["minecraft:furnace", "powah:furnator_starter", "powah:furnator_basic", "powah:furnator_hardened", "powah:furnator_blazing", "powah:furnator_niotic", "powah:furnator_spirited"];
	let magTiers = ["minecraft:bucket", "powah:magmator_starter", "powah:magmator_basic", "powah:magmator_hardened", "powah:magmator_blazing", "powah:magmator_niotic", "powah:magmator_spirited"];
	let theTiers = ["thermoelectric_plate", "thermo_generator_starter", "thermo_generator_basic", "thermo_generator_hardened", "thermo_generator_blazing", "thermo_generator_niotic", "thermo_generator_spirited"];

	let reaCorner = ["uraninite", "reactor_starter", "reactor_basic", "reactor_hardened", "reactor_blazing", "reactor_niotic", "reactor_spirited"];
	let reaMiddle = ["dielectric_casing", "uraninite", "uraninite", "uraninite", "uraninite", "uraninite", "uraninite"];


	// Calling
	for (let i in genTiers) {
		averageRecipe("solar_panel", genTiers[i], capTiers[i], solTiers[i], matTiers[i]) // Solar Panels
		averageRecipe("furnator", genTiers[i], capTiers[i], matTiers[i], furTiers[i]) // Furnators
		averageRecipe("magmator", genTiers[i], capTiers[i], matTiers[i], magTiers[i]) // Magmator

		reactorRecipe(genTiers[i], capTiers[i], reaCorner[i], reaMiddle[i]);
		thermoRecipe(genTiers[i], matTiers[i], capTiers[i], theTiers[i]);
	} 
})