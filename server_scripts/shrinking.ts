ServerEvents.recipes((event) => {
	(event.shaped as any)(`1x teawieks:scaler`, ["iei", "igi", "ibi"], {
		b: "minecraft:stone_button",
		e: "minecraft:ender_pearl",
		g: "minecraft:glass",
		i: "minecraft:iron_ingot",
	});
});
