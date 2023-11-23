// Yeah this requires it to run on startup. Im worried about what mojang's potion system is like now

MoreJSEvents.registerPotionBrewing(event => {
	event.removeByPotion(null, null, "apotheosis:flying");
	event.removeByPotion(null, null, "apotheosis:long_flying");
	event.removeByPotion(null, null, "apotheosis:extra_long_flying");
})