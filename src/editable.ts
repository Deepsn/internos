import Iris from "@rbxts/iris";
import { createElement } from "./elements";

export function CreateEditable<T>(text: string, value?: T) {
	const _type = typeOf(value);
	const title: [string] = [text];
	const editable = Iris.State(value);

	createElement({
		create: () => {
			switch (_type) {
				case "string": {
					const textElement = Iris.InputText(title, { text: value as string });
					editable.set(textElement.state.text.value as T);
					break;
				}

				case "number": {
					const numElement = Iris.InputNum(title, { number: value as number });
					editable.set(numElement.state.number.value as T);
					break;
				}

				case "Vector2int16":
				case "Vector2": {
					const vector2Element = Iris.InputVector2(title, {
						number: value as Vector2,
					});
					editable.set(vector2Element.state.number.value as T);
					break;
				}

				case "Vector3int16":
				case "Vector3": {
					const vector3Element = Iris.InputVector3(title, {
						number: value as Vector3,
					});
					editable.set(vector3Element.state.number.value as T);
					break;
				}

				case "CFrame": {
					const cframe = value as CFrame;
					const position = cframe.Position;
					const rotation = cframe.Rotation.Position;

					Iris.CollapsingHeader(title);
					const positionElement = Iris.InputVector3(["Position"], {
						number: position,
					});
					const rotationElement = Iris.InputVector3(["Rotation"], {
						number: rotation,
					});
					Iris.End();

					const { X, Y, Z } = rotationElement.state.number.value;

					editable.set(
						new CFrame(positionElement.state.number.value).mul(
							CFrame.Angles(X, Y, Z),
						) as T,
					);

					break;
				}

				default: {
					const unknownElement = Iris.InputText(title, {
						text: tostring(value) as string,
					});
					editable.set(unknownElement.state.text.value as T);
					break;
				}
			}
		},
	});

	return editable.get() ?? value;
}
