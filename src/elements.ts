import type { Element } from "./types";

const Elements = new Map<number, Element>();

export function createElement(element: Omit<Element, "id">) {
	const id = debug.info(3, "sl").join("@");
	const index = debug.info(3, "l")[0];

	Elements.set(index, { ...element, id });
}

export function createElements() {
	const now = tick();

	for (const [id, element] of Elements) {
		if (element.timeout && element.timeout < now) {
			Elements.delete(id);
			continue;
		}

		element.create();
	}
}
