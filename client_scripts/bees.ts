import bees from "../common/bees"

ClientEvents.lang("en_us", event => {
	for (const id in bees) {
		console.log("adding lang:", `entity.productivebees.${id}_bee`, bees[id].name)
		event.add(`entity.productivebees.${id}_bee`, bees[id].name)
	}
})