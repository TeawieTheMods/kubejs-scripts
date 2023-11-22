import outputRemove from "../common/disabled_items";

ItemEvents.tooltip((event) => {
	for (let i in outputRemove) {
		event.add(outputRemove[i] as any, "§4This item has been disabled.");
	}
});
