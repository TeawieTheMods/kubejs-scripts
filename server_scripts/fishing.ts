LootJS.modifiers(event => {
	event.addLootTableModifier("minecraft:gameplay/fishing/treasure" as any)
	.replaceLoot("minecraft:saddle" as any,"minecraft:heart_of_the_sea" as any)
})