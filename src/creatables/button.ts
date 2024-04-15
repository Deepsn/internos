import Iris from "@rbxts/iris";
import { createElement } from "../elements";

export function CreateButton(text: string, timeout?: number) {
	const clicked = Iris.State(false);

	createElement({
		create: () => {
			const button = Iris.Button([text]);

			clicked.set(button.clicked());
		},
		timeout: timeout ? tick() + timeout : undefined,
	});

	return clicked.get();
}
