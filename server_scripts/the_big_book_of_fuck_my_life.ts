LootJS.modifiers((event) => {
	event
		.addLootTableModifier("hexcasting:grant_patchi_book" as any)
		.removeLoot("patchouli:guide_book" as any)
		.addLoot("eccentrictome:tome" as any)
		.addNBT({
			display: {
				Name: JSON.stringify({
					text: "The Big Book of Fuck My Life",
					color: "light_purple",
					italic: false,
				}),
				Lore: [
					JSON.stringify({
						text: "Legends say that a certain individual spent hours making this book",
						color: "gray",
					}),
				] as any,
			},
			"eccentrictome:mods": {
				ad_astra: { 0: { Count: 1, id: "ad_astra:astrodux" } },
				advancedperipherals: {
					0: {
						Count: 1,
						id: "patchouli:guide_book",
						tag: { "patchouli:book": "advancedperipherals:manual" },
					},
				},
				ae2: { 0: { Count: 1, id: "ae2:guide" } },
				alchemistry: {
					0: {
						Count: 1,
						id: "patchouli:guide_book",
						tag: { "patchouli:book": "alchemistry:alchemistry_book" },
					},
				},
				apotheosis: {
					0: {
						Count: 1,
						id: "patchouli:guide_book",
						tag: { "patchouli:book": "apotheosis:apoth_chronicle" },
					},
				},
				botania: { 0: { Count: 1, id: "botania:lexicon" } },
				buildinggadgets2: {
					0: {
						Count: 1,
						id: "patchouli:guide_book",
						tag: { "patchouli:book": "buildinggadgets2:buildinggadgets2book" },
					},
				},
				citadel: { 0: { Count: 1, id: "citadel:citadel_book" } },
				cookingforblockheads: {
					0: { Count: 1, id: "cookingforblockheads:recipe_book" },
				},
				croptopia: { 0: { Count: 1, id: "croptopia:guide" } },
				hexcasting: {
					0: {
						Count: 1,
						id: "patchouli:guide_book",
						tag: { "patchouli:book": "hexcasting:thehexbook" },
					},
				},
				industrialforegoing: {
					0: {
						Count: 1,
						id: "patchouli:guide_book",
						tag: {
							"patchouli:book": "industrialforegoing:industrial_foregoing",
						},
					},
				},
				integrateddynamics: {
					0: {
						Count: 1,
						id: "integrateddynamics:on_the_dynamics_of_integration",
					},
				},
				laserio: {
					0: {
						Count: 1,
						id: "patchouli:guide_book",
						tag: { "patchouli:book": "laserio:laseriobook" },
					},
				},
				littlelogistics: {
					0: {
						Count: 1,
						id: "patchouli:guide_book",
						tag: { "patchouli:book": "littlelogistics:guide" },
					},
				},
				modonomicon: {
					0: {
						Count: 1,
						id: "modonomicon:modonomicon",
						tag: { "modonomicon:book_id": "theurgy:the_hermetica" },
					},
				},
				modularrouters: {
					0: {
						Count: 1,
						id: "patchouli:guide_book",
						tag: { "patchouli:book": "modularrouters:book" },
					},
				},
				pneumaticcraft: {
					0: {
						Count: 1,
						id: "patchouli:guide_book",
						tag: { "patchouli:book": "pneumaticcraft:book" },
					},
				},
				powah: { 0: { Count: 1, id: "powah:book" } },
				productivebees: {
					0: {
						Count: 1,
						id: "patchouli:guide_book",
						tag: { "patchouli:book": "productivebees:guide" },
					},
				},
				rftoolsbase: { 0: { Count: 1, id: "rftoolsbase:manual" } },
				sebastrnlib: {
					0: {
						Count: 1,
						id: "patchouli:guide_book",
						tag: { "patchouli:book": "sebastrnlib:sebastrn_mods_guide_book" },
					},
				},
				solcarrot: { 0: { Count: 1, id: "solcarrot:food_book" } },
			},
		});
});
