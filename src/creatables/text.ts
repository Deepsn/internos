import Iris from "@rbxts/iris";
import { createElement } from "../elements";

export function CreateText(text: string, timeout?: number) {
	createElement({
		create: () => {
			Iris.Text([text]);
		},
		timeout: timeout ? tick() + timeout : undefined,
	});
}
