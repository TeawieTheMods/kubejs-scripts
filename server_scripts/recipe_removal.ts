import outputRemove from "../common/disabled_items";

ServerEvents.recipes((event) => {
	for (let i in outputRemove) {
		event.remove({ output: `${outputRemove[i]}` as any });
	}
});
